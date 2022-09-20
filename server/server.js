import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors())

const PORT = process.env.PORT || 3001

app.post('/search', async (req, res) => {
    let term = req.body.term;
    let mediaType = req.body.mediaType;

    if (mediaType == "all") {
        const response = await fetch(`https://itunes.apple.com/search?term=${term}`)
        const data = await response.json().catch((e) => {
            console.log(e)
            res.json(e);
        });
        res.json(data);
    } else {
        let response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=${mediaType}`);
        const data = await response.json().catch((e) => {
            console.log(e);
            res.json(e);
        });
        res.json(data);
    };
});

app.listen(3001, () => { 
    console.log(`Server started on port ${PORT}`);
});