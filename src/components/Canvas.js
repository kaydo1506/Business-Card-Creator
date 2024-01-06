import React from 'react';
import TextElement from './TextElement';
import ImageElement from './ImageElement';

const Canvas = ({
  texts,
  images,
  onUpdateText,
  onDragStart,
  onRemoveElement,
}) => {
  return (
    <div className='mt-12'>
      <h1 className='text-xl font-semibold text-gray-700 mb-4'>Canvas</h1>
      <div className='bg-white border-4 shadow-inner border-gray-200 rounded-lg p-6 h-[200px] overflow-y-auto'>
        {texts.length === 0 ? (
          <div className='text-gray-400 text-sm text-center'>
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
      {/*---------------------------------------------------------------------------------*/}
      {images.length > 0 ? (
        <div className='flex overflow-x-auto mb-4 space-x-4 bg-gray-100 p-2 rounded '>
          {images.map((imageObj) => (
            <div
              key={imageObj.id}
              className='flex-shrink-0 border border-gray-300 shadow rounded p-1'
              style={{ minWidth: '100px' }}
            >
              <ImageElement imageObj={imageObj} onDragStart={onDragStart} />
            </div>
          ))}
        </div>
      ) : (
        <span className='flex justify-center text-sm items-center bg-gray-100 p-4 rounded text-gray-400'>
          Upload images from the Toolbar
        </span>
      )}
    </div>
  );
};

export default React.memo(Canvas);
