import { Router } from 'express';
import { createPeopleController } from './useCases/CreatePeople';
import { selectRandomPeopleController } from './useCases/SelectRandomPeople';

const router = Router();

router.get('/getRandomPeople', (req, res) => {
  return selectRandomPeopleController.handle(res)
});

// router.post('/createUser', (req, res) => {
//   return createPeopleController.handle(req, res)
// });

export {router};
