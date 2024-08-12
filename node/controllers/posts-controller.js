const mongoose = require('mongoose');
const Post = require('../models/post-model');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving posts', type: err });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving post' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author: req.user._id,
      tags,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    post.title = title;
    post.content = content;
    post.tags = tags;
    post.updatedAt = new Date();

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error updating post' });
  }
};

exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
    
      if (post.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
  
      await Post.findByIdAndDelete(req.params.id);
      res.json({ message: 'Post deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting post' });
    }
};