const mongoose = require('mongoose')

const GarmentsSchema = {
    brand: String,
    description: String,
    reference: String,
    pvp: Number,
    reting_pvp: Number,
    category: String,
    part_category: String,
    styles: [String],
    sizes: [String],
    gender: String,
    comments: String
}

const garmentModel = mongoose.model('test', GarmentsSchema, 'test')

module.exports = garmentModel;