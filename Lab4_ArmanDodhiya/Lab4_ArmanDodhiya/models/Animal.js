/**
 * 
 * Author: Arman Dodhiya
 * Student ID: 100865197
 * Date Completed: 2024-04-19
 * 
 * Reference : I took help from blackbox to create connection
 */

const mongoose = require('mongoose');

const SchemaofAnimal = new mongoose.Schema({
  zoo: { type: String, required: true },
  scientificName: { type: String, required: true },
  commonName: { type: String, required: true },
  givenName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number, required: true },
  isTransportable: { type: Boolean, required: true },
});

module.exports = mongoose.model('Animal', SchemaofAnimal);