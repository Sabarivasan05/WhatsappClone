import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbmessages.js'; // Assuming dbmessages.js exports a Mongoose model

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

const connection_url = 'mongodb+srv://your_username:your_password@cluster0.somomn4.mongodb.net/your_database_name?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.post('/messages/new', (req, res) => {
    const dbmessage = req.body;

    Messages.create(dbmessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(`New message created: ${data}`);
        }
    });
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
