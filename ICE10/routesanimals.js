import express from 'express';

import AnimalsListView from '../controllers/animals/list.js';
import AnimalsShowView from '../controllers/animals/show.js';
import AnimalsCreateView from '../controllers/animals/create.js';
import AnimalsEditView from '../controllers/animals/edit.js';


//api controllers
import AnimalsFindController from '../controllers/aniamls/retrieve.js';

export const animalsRouter = express.Router();


/*
|* View routes
|*/
//list
animalsRouter.length('/animal', AnimalsListView);
//create
animalsRouter.get('/animals/create', AnimalsCreateView);
//show
animalsRouter.get('/animals/:name/edit', AnimalsShowView);
//edit
animalsRouter.get('/animals/show',AnimalsEditView);

/*
|* API routes
|*/
// list all
animalsRouter.get('/api/animals', AnimalsFindController);