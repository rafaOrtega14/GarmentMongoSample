const  garmentModel = require('../models/GarmentsSchema');

const getAllGarments = async () => {
    try {
        const garments = await garmentModel.find();
        return garments;
    } catch(e) {
        console.error(error);
    }
}

const getGarmentById = async id => {
    try {
        const garment = await garmentModel.findById(id)
        return garment;
    } catch(e) {
        console.error(error)
    }
}

const createGarment = async garment => {
    try {
        const newGarment = new garmentModel(garment);
        const result = await newGarment.save();
        return result;
    } catch(e) {
        console.error(error)
    }
}

const updateGarmentBrand = async (id, brand) => {
    try {
        const updatedGarment = await garmentModel.findByIdAndUpdate(
            id, 
            {
                $set: { brand }
            }
        );
        return updatedGarment;
    } catch(e) {
        console.error(error)
    }
}

const deleteGarmentById = async id => {
    try {
        const deletedGarment = await garmentModel.findByIdAndDelete(id)
        return deletedGarment;
    } catch(e) {
        console.error(error)
    }
}

module.exports = { 
    getAllGarments,
    getGarmentById,
    createGarment,
    updateGarmentBrand,
    deleteGarmentById
}