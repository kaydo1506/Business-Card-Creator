import React from 'react';

const TextElement = ({ text, id, onEdit }) => {
  return (
    <div className='text-element' onClick={() => onEdit(id)}>
      {text}
    </div>
  );
};

export default TextElement;
