import React, { useState } from 'react';
import { Edit } from '../Icons/Icons';

const TextElement = ({ textObj, onUpdate, onDragStart, onRemoveElement }) => {
  const { id, text, type, emphasis } = textObj;
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(text);

  const handleChange = (e) => {
    setEditableText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (!editableText) {
      // Remove element if the text is empty
      onRemoveElement(id);
    } else {
      // Update text as usual
      onUpdate(id, editableText);
    }
  };

  const inputStyle =
    'border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500';

  const renderElement = () => {
    if (isEditing) {
      return (
        <input
          type='text'
          value={editableText}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className={inputStyle}
        />
      );
    } else {
      switch (type) {
        case 'h1':
          return (
            <div className='flex items-center justify-between'>
              <h1 className={`text-2xl font-bold ${emphasis ? 'italic' : ''}`}>
                {editableText}
              </h1>
              <span
                className='cursor-pointer'
                onClick={() => setIsEditing(true)}
              >
                <Edit />
              </span>
            </div>
          );
        case 'h2':
          return (
            <div className='flex items-center space-x-2 justify-between'>
              <h2
                className={`text-xl font-semibold ${emphasis ? 'italic' : ''}`}
              >
                {editableText}
              </h2>
              <span
                className='cursor-pointer'
                onClick={() => setIsEditing(true)}
              >
                <Edit />
              </span>
            </div>
          );
        case 'p':
        default:
          return (
            <div className='flex items-center space-x-2 justify-between'>
              <p className={`text-base ${emphasis ? 'italic' : ''}`}>
                {editableText}
              </p>
              <span
                className='cursor-pointer'
                onClick={() => setIsEditing(true)}
              >
                <Edit />
              </span>
            </div>
          );
      }
    }
  };

  return (
    <div
      className='p-2 cursor-pointer'
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      {renderElement()}
    </div>
  );
};

export default TextElement;
