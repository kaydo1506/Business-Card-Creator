import React from 'react';

const ImageElement = ({ imageObj, onDragStart }) => {
  const { id, src } = imageObj;

  return (
    <div
      className='p-2 cursor-pointer'
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      <img
        src={src}
        alt='Business Card Element'
        className='max-w-1/3 h-32 rounded-md'
      />
    </div>
  );
};

export default ImageElement;
