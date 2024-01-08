import { useState, useContext } from 'react';
import { Context } from './Context';
import { Delete } from '../Icons/Icons';

const ImageElement = ({ imageObj }) => {
  const { handleDragStart, handleDeleteImage } = useContext(Context);

  const { id, src } = imageObj;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='p-2 cursor-pointer relative'
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt='Business Card Element'
        className='w-32 h-40 rounded-md object-cover'
      />
      {isHovered && (
        <button
          onClick={() => handleDeleteImage(id)}
          className='absolute top-0 right-0 bg-white rounded-full p-1'
        >
          <Delete />
        </button>
      )}
    </div>
  );
};

export default ImageElement;
