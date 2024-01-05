import React from 'react';
import TextElement from './TextElement';

const Canvas = ({ texts, onUpdateText, onDragStart }) => {
  return (
    <div className='mt-12'>
      <h1 className='text-3xl text-stone-700'>Canvas</h1>
      <div className='canvas bg-white border-2 border-gray-300 p-4'>
        {texts.map((textObj) => (
          <TextElement
            key={textObj.id}
            id={textObj.id}
            text={textObj.text}
            type={textObj.type}
            color={textObj.color}
            onUpdate={onUpdateText}
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
