import express from 'express';
import {
  createStudent,
  getStudentById,
} from '../controllers/studentsController.js';

const studentsRouter = express.Router();

studentsRouter.get('/');

studentsRouter.get('/:id', getStudentById);

studentsRouter.post('/', express.json(), createStudent);

export default studentsRouter;
