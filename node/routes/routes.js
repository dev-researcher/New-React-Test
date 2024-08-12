// routes/routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');
const postsController = require('../controllers/posts-controller');
const auth = require('../middleware/auth');

// Rutas de autenticación
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rutas de posts
router.get('/posts', auth, postsController.getPosts);
router.get('/posts/:id', auth, postsController.getPostById);
router.post('/posts', auth, postsController.createPost);
router.put('/posts/:id', auth, postsController.updatePost);
router.delete('/posts/:id', auth, postsController.deletePost);

module.exports = router;
