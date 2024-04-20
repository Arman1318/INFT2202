/**
 * 
 * Author: Arman Dodhiya
 * Student ID: 100865197
 * Date Completed: 2024-04-19
 */

const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Get all animals
router.get('/', animalController.getAllAnimals);

// Get animal by ID
router.get('/:id', animalController.getAnimalById);

// Get animal entry form
router.get('/create', animalController.getAnimalEntryForm);

// Get animal edit form
router.get('/:id/edit', animalController.getAnimalEditForm);

// Post new animal
router.post('/', animalController.postAnimal);

// Put updated animal
router.put('/:id', animalController.putAnimal);

// Delete animal
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;