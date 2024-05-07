const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        url:String,
        filename:String,
       },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    size: [{
        type: String,
        required: true
    }],
    color: {
        type: String,
        required: true
    }
});

const Listing = new mongoose.model("Listing", listingSchema)

module.exports = Listing;
