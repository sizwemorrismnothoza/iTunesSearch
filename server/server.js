const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const url = require("url");


const app = express();

app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 3001

app.post('/search', async (req, res) => {
    let term = req.body.term;
    let mediaType = req.body.mediaType;

    const queryParams = {
        term: term,
    };
    
    const params = new url.URLSearchParams(queryParams);

    if (mediaType === "all") {
        try {
            const response = await axios.get('https://itunes.apple.com/search', {
                params: {
                    term: term
                }
            });s
            res.json(response.data);
        } catch (error) {
            console.error(error);
        }
    } else {
        try {
            const response = await axios.get('https://itunes.apple.com/search', {
                params: {
                    term: term,
                    entity:mediaType
                }
            });
            res.json(response.data);
        } catch (error) {
            console.error(error);
            res.json(error);
        }
    };
});

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3001, () => { 
    console.log(`Server started on port ${PORT}`);
});