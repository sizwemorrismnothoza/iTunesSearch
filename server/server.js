const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname + "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 3001

app.post('/search', async (req, res) => {
    let term = req.body.term;
    let mediaType = req.body.mediaType;

    if (mediaType == "all") {
        const response = await axios(`https://itunes.apple.com/search?term=${term}`)
        const data = await response.json().catch((e) => {
            console.log(e)
            res.json(e);
        });
        res.json(data);
    } else {
        let response = await axios(`https://itunes.apple.com/search?term=${term}&entity=${mediaType}`);
        const data = await response.json().catch((e) => {
            console.log(e);
            res.json(e);
        });
        res.json(data);
    };
});

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3001, () => { 
    console.log(`Server started on port ${PORT}`);
});