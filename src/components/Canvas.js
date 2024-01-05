import React from 'react';
import TextElement from './TextElement';

const Canvas = ({ texts, onUpdateText, onDragStart, onRemoveElement }) => {
  return (
    <div className='mt-12'>
      <h1 className='text-3xl font-semibold text-gray-700 mb-4'>Canvas</h1>
      <div className='bg-white border-4 shadow-inner border-gray-200 rounded-lg p-6'>
        {texts.length === 0 ? (
          <div className='text-gray-500 text-center'>
            Add and edit your card content here
          </div>
        ) : (
          texts.map((textObj) => (
            <TextElement
              key={textObj.id}
              textObj={textObj}
              onUpdate={onUpdateText}
              onDragStart={onDragStart}
              onRemoveElement={onRemoveElement}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Canvas);
