import React, { useState } from 'react';

const TextElement = ({ textObj, onUpdate, onDragStart, onRemoveElement }) => {
  const { id, text, type, emphasis } = textObj;
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditableText(e.target.value);
  };

  const handleBlur = () => {
    console.log(editableText)
    setIsEditing(false);
    if (!editableText) {
      // Remove element if text is empty
      onRemoveElement(id);
    } else {
      // Update text as usual
      onUpdate(id, editableText);
    }
  };

  const inputStyle =
    'border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500';

  const renderElement = () => {
    const commonProps = {
      onDoubleClick: handleDoubleClick,
    };

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
            <h1
              {...commonProps}
              className={`text-3xl font-bold ${emphasis ? 'italic' : ''}`}
            >
              {editableText}
            </h1>
          );
        case 'h2':
          return (
            <h2
              {...commonProps}
              className={`text-2xl font-semibold ${
                emphasis ? 'italic' : ''
              }`}
            >
              {editableText}
            </h2>
          );
        case 'p':
        default:
          return (
            <p
              {...commonProps}
              className={`text-base ${emphasis ? 'italic' : ''}`}
            >
              {editableText}
            </p>
          );
      }
    }
  };

  return (
    <div className='p-2 cursor-pointer' draggable onDragStart={(e) => onDragStart(e, id)}>
      {renderElement()}
    </div>
  );
};

export default TextElement;
