/**
 * 
 * Author: Arman Dodhiya
 * Student ID: 100865197
 * Date Completed: 2024-04-19
 */

const Animal = require('../models/animal');

// Fetch all animal list from database
exports.getAllAnimals = async (req, res) => {
  try {
    const constAnimal = await Animal.find();
    res.render('all-animals', { animals: constAnimal });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Get animal data by ID
exports.getAnimalById = async (req, res) => {
  try {
    const constAnimal = await Animal.findById(req.params.id);
    res.render('animal-detail', { animal: constAnimal });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// fetch entry-form
exports.getAnimalEntryForm = (req, res) => {
  res.render('entry-form', { pageTitle: 'Add Animal' });
};

// fetch edit form
exports.getAnimalEditForm = async (req, res) => {
  try {
    const constAnimal = await Animal.findById(req.params.id);
    res.render('entry-form', { animal: constAnimal, pageTitle: 'Edit Animal' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Put updated animal
exports.putAnimal = async (req, res) => {
  try {
    const constAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await constAnimal.save();
    res.redirect(`/animals/${constAnimal._id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.redirect('/animals');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Post new animal
exports.postAnimal = async (req, res) => {
  try {
    const constAnimal = new Animal(req.body);
    await constAnimal.save();
    res.redirect('/animals');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
