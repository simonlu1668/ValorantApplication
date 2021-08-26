const { default: axios } = require('axios');
const express = require('express');
const app = express();


app.use(express.static('dist'));

app.get('/characterPortaits', (req, res) => {
    axios.get('https://valorant-api.com/v1/agents')
    .then((response) => {
        res.send(response.data);
    })
    .catch((err) => {
        res.send(err);
    })
})

const port = process.env.PORT || 3000;
app.listen(port, function () { 
 console.log('App listening on port: ' + port);
});