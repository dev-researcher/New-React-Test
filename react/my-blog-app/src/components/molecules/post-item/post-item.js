import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost, deletePost } from '../../../redux/actions/post-actions';
import Modal from '../../organisms/modal/modal';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './post-item.scss';

const PostItem = ({ post }) => {

  const dispatch = useDispatch();
  const [ displayEditModal, setDisplayEditModal ] = useState(false);

  const handleEditPost = (title, content) => {
    const postId = post._id
    dispatch(updatePost({ title, content}, postId));
  };

  const deleteComment = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <div className="post__item">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className='edit__delete__controls'>
        <FaRegEdit onClick={() => setDisplayEditModal(true)}/>
        <MdDelete onClick={deleteComment}/>
      </div>

      {
        displayEditModal &&
        <Modal
          onClose={() => setDisplayEditModal(false)}
          onSubmit={handleEditPost}
          primaryButtonText='Edit Post' 
          secondaryButtonText ='Cancel'
        /> 
      }
    </div>
  );
};

export default PostItem;
