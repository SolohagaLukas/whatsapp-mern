//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1369292",
    key: "106b1889c4197f9435e9",
    secret: "787910b82f2463adc5be",
    cluster: "us2",
    useTLS: true
});

//middleware
app.use(express.json());
app.use(cors());

//DB config
const connection_url = 'mongodb+srv://SolohagaLukas:uHMC1ussp1ryggrI@cluster0.nzuoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB connected');

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log("A Change ocurred", change);

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', 
                {
                    name: messageDetails.name,
                    message: messageDetails.message
                }
            );
        } else {
            console.log('Error triggering Pusher');
        }

    });
});

//api routes
app.get('/', (req,res) => res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
