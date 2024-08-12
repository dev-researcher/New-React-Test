import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getPostById, addPost } from '../../../redux/actions/post-actions';
import PostList from '../../organisms/post-list/post-list';
import { FaSearch } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import './home.scss';
import InputField from '../../atoms/input/input';
import Modal from '../../organisms/modal/modal';

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);

  const [idInput, setIdInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAllComments = useCallback(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const getCommentById = (id) => {
    setIdInput(id);
    dispatch(getPostById(id));
  };

  const handleCreatePost = (title, content) => {
    const authorId = auth.user.user._id;
    dispatch(addPost({ title, content, authorId}));
  };

  return (
    <div className="home__page">
      <h1>Blog Posts</h1>
      <div className='home__page__controls'>
        <div className='home__page__controls--create'>
          <span>Create Post </span>
          <IoIosCreate onClick={() => setIsModalOpen(true)} />
        </div>
        <div className='home__page__controls--all'>
          <span onClick={getAllComments}>Get all comments</span>
          <FaSearch />
        </div>
        <InputField 
          label="Get comment by ID"
          type="text"
          name="get"
          value={idInput}
          onChange={(e) => {
            setIdInput(e.target.value);
            getCommentById(e.target.value);
          }}
          required
        />
      </div>
      <PostList posts={posts} />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreatePost}
          primaryButtonText='Create Post' 
          secondaryButtonText ='Cancel'
        />
      )}
    </div>
  );
};

export default Home;
