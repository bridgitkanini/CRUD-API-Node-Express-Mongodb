const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});


app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated')
});


mongoose.connect('mongodb+srv://bridgitkm:0724257014@backenddb.g4qorh2.mongodb.net/Node-API?retryWrites=true&w=majority')
        .then(() => {
            console.log('Connected to database!')
        })
        .catch(() => {
            console.log('Connection failed!')
        })