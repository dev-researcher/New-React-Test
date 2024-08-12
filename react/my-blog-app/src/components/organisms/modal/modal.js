import React, { useState } from 'react';
import InputField from '../../atoms/input/input';
import Button from '../../atoms/button/button';
import './modal.scss';

const Modal = ({ onClose, onSubmit, primaryButtonText, secondaryButtonText }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="modal__backdrop">
      <div className="modal__content">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <InputField
            label="Content"
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        <Button type="submit" text="Create Post">
            {primaryButtonText}
        </Button>
        </form>
        <Button onClick={onClose} text="Close">
            {secondaryButtonText}
        </Button>
      </div>
    </div>
  );
};

export default Modal;
