import React, { useState, useContext, useCallback } from 'react';
import { Context } from './Context';
import { Edit } from '../Icons/Icons';

const TextElement = () => {
  const { state, updateState, handleDragStart } = useContext(Context);

  const { type, content, emphasis, bold } = state;
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(content);
  const [textEdited, setTextEdited] = useState(false); // State to track if text has been edited

  const handleChange = useCallback((e) => {
    setEditableText(e.target.value);
  }, []);

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    const trimmedText = editableText.trim(); // Trim the text to remove extra spaces
    if (trimmedText && trimmedText !== content) {
      updateState(type, trimmedText);
      setTextEdited(true); // Mark as edited
    }
  }, [editableText, content, type, updateState]);

  const inputStyle =
    'border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500';

  const renderElement = () => {
    if (isEditing) {
      return (
        <input
          type='text'
          placeholder='Enter text...'
          value={editableText}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className={inputStyle}
        />
      );
    } else {
      const displayText = content || (
        <span className='text-sm text-gray-400'>Click to edit</span>
      ); // Default text if content is empty
      return (
        <div className='flex items-center space-x-2 justify-between'>
          {type === 'h1' && (
            <h1
              className={`text-2xl ${emphasis ? 'italic' : ''} ${
                bold ? 'font-bold' : ''
              }`}
            >
              {displayText}
            </h1>
          )}
          {type === 'h2' && (
            <h2
              className={`text-xl ${emphasis ? 'italic' : ''} ${
                bold ? 'font-bold' : ''
              }`}
            >
              {displayText}
            </h2>
          )}
          {type === 'p' && (
            <p
              className={`text-base ${emphasis ? 'italic' : ''} ${
                bold ? 'font-bold' : ''
              }`}
            >
              {displayText}
            </p>
          )}
          <span className='cursor-pointer' onClick={() => setIsEditing(true)}>
            <Edit />
          </span>
        </div>
      );
    }
  };

  return (
    <div
      className='p-2 cursor-pointer'
      draggable={textEdited} // Make draggable only if text has been edited
      onDragStart={(e) => textEdited && handleDragStart(e, type)} // Handle drag start only if text has been edited
    >
      {renderElement()}
    </div>
  );
};

export default TextElement;
