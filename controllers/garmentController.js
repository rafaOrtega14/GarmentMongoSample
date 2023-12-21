const { 
    getAllGarments,
    getGarmentById, 
    createGarment,
    updateGarmentBrand,
    deleteGarmentById
} = require('../repository/GarmentsRepository');

const findAllController = async(req, res) => {
    try {
        const garments = await getAllGarments();
        res.send(garments);
    } catch(e) {
        res.status(500).send(error)
    }
}

const findOneByIdController = async(req, res) => {
    try {
        const garments = await getGarmentById(req.params.id);
        res.send(garments);
    } catch(e) {
        res.status(500).send(error)
    }
}

const createGarmentController = async(req, res) => {
    try {
        const garments = await createGarment(req.body);
        res.send(garments);
    } catch(e) {
        res.status(500).send(error)
    }
}

const updateGarmentController = async(req, res) => {
    try {
        const { id, brand } = req.body
        const garmentResult = await updateGarmentBrand(id, brand);
        res.send(garmentResult);
    } catch(e) {
        res.status(500).send(error)
    }
}

const deleteGarmentByIdController = async(req, res) => {
    try {
        const { id } = req.params
        const garmentResult = await deleteGarmentById(id);
        res.send(garmentResult);
    } catch(e) {
        res.status(500).send(error)
    }
}

module.exports = { 
    findAllController,
    findOneByIdController,
    createGarmentController,
    updateGarmentController,
    deleteGarmentByIdController
}