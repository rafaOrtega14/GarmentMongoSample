const express = require('express');
const mongoose = require('mongoose');

const { 
    findAllController,
    findOneByIdController,
    createGarmentController,
    updateGarmentController,
    deleteGarmentByIdController
} = require('./controllers/garmentController');

require('dotenv').config()

const app = express();
app.use(express.json());

const PORT = 3000;

const start = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

        app.get('/', findAllController);
        app.get('/:id', findOneByIdController);
        app.post('/', createGarmentController);
        app.put('/', updateGarmentController);
        app.delete('/:id', deleteGarmentByIdController);
    } catch(e) {
        console.error(`Error initializing api at port ${PORT}`)
    }
}

start()