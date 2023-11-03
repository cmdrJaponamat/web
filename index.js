const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get('*', (req, res) => {
    res.sendFile('index.html');
})

app.post('/reg-data', (req, res) => {
    console.log(req.body);
    fs.appendFile("data.dat", JSON.stringify(req.body), (err)=>{
        if (err) {
            res.status(500).send('Not added');
        }
        else {res.status(201).send('Added');}
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
