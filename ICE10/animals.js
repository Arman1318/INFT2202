import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
     name,
     legs,
     Headers,
     sound

});
 export default mongoose.model('Animal', animalSchema)