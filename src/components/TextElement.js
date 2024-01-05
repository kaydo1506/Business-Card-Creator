import React, { useState } from 'react';

const TextElement = ({ id, text, type, color, onUpdate, onDragStart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditableText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(id, editableText);
  };

  const textStyle = `text-${color}-700`; 
  const inputStyle =
    'border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500';

  const renderElement = () => {
    const commonProps = {
      onDoubleClick: handleDoubleClick,
      className: textStyle,
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
            <h1 {...commonProps} className={`${textStyle} text-3xl font-bold`}>
              {editableText || `New ${type}`}
            </h1>
          );
        case 'h2':
          return (
            <h2
              {...commonProps}
              className={`${textStyle} text-2xl font-semibold`}
            >
              {editableText || `New ${type}`}
            </h2>
          );
        case 'p':
        default:
          return (
            <p {...commonProps} className={`${textStyle} text-base`}>
              {editableText || `New ${type}`}
            </p>
          );
      }
    }
  };

  return (
    <div
      className='text-element p-2'
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      {renderElement()}
    </div>
  );
};

export default TextElement;
