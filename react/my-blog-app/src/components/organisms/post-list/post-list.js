import React from 'react';
import PostItem from '../../molecules/post-item/post-item';

const PostList = ({ posts }) => {

  return (
    <div className="post__list">
      {posts.length > 0 ? (
        posts.map(post => <PostItem key={post._id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default PostList;
