const express = require('express');
const mongoose = require('mongoose');
const Product = require('/models/product.model.js')
const app = express();


app.use(express.json());


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});


app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
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