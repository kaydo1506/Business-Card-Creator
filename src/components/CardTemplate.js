import React from 'react';

const CardTemplate = ({ onDrop, elements }) => {
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className='card-template' onDragOver={handleDragOver} onDrop={onDrop}>
      {elements.map((element) => (
        <div
          key={element.id}
          className='text-element'
          style={{ color: element.color }}
        >
          {element.text}
        </div>
      ))}
    </div>
  );
};

export default CardTemplate;
