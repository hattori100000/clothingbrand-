
require('dotenv').config()
const mongoose = require("mongoose");
const initdata = require("../init/data");
const Listing = require("../model/listing-model.js");

const URL ='mongodb+srv://demo:demo@cluster0.9xoxe6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectdb = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      driverInfo: { name: 'Mongoose', version: '8.3.2' }
    });
    console.log("Connection successful to the database");
    // Once connected, initialize the database
    await initdb();
  } catch (error) {
    console.error("Database connection failed:", error);
    // Throwing the error to propagate it further
    throw error;
  }
};

const initdb = async () => {
  try {
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized successfully");
  } catch (error) {
    console.error("Data initialization failed:", error);
    throw error;
  }
};

module.exports = connectdb;
