import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get('/', controller.getPosts);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);
router.post('/', controller.createPost);

export const postRouter = router;