import express from 'express';
import controller from '../controllers/users';

const router = express.Router();

router.get('/', controller.getUsersController);
router.get('/:id', controller.getUserByIdController);

export const userRouter = router;