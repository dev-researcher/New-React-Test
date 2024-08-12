import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, deletePost } from '../../../redux/actions/post-actions';
import Modal from '../../organisms/modal/modal';
import Pagination from '../../pagination/pagination';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';
import './post-item.scss';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const handleEditPost = (title, content, postId) => {
    dispatch(updatePost({ title, content }, postId));
  };

  const deleteComment = (postId) => {
    dispatch(deletePost(postId));
  };

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="post_container">
      {currentPosts.map((post) => (
        <div key={post._id} className="post_item">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="edit_delete_controls">
            <FaRegEdit onClick={() => setDisplayEditModal(post._id)} aria-label="Edit post" />
            <MdDelete onClick={() => deleteComment(post._id)} aria-label="Delete post" />
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {displayEditModal && (
        <Modal
          onClose={() => setDisplayEditModal(null)}
          onSubmit={(title, content) => handleEditPost(title, content, displayEditModal)}
          primaryButtonText="Edit post"
          secondaryButtonText="Cancel"
        />
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PostList;
