import React from 'react';
import { PhotoIcon, Delete } from '../Icons/Icons';

const CardTemplate = ({
  elements,
  handleDropOnTitle,
  handleDropOnBody,
  onCardTemplateReset,
}) => {
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className='mt-12'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-3xl font-semibold text-gray-700'>Card Template</h2>
        <span onClick={onCardTemplateReset} className='cursor-pointer '>
          <Delete />
        </span>
      </div>
      <div className='bg-white border border-gray-200 shadow-2xl rounded-lg p-6'>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDropOnTitle}
          className='border-gray-200 border p-4 rounded-md mb-4 flex justify-center items-center'
          style={{ minHeight: '60px' }}
        >
          {elements.some(
            (element) => element.type === 'h1' || element.type === 'h2'
          ) ? (
            elements.map(
              (element) =>
                (element.type === 'h1' || element.type === 'h2') && (
                  <div
                    key={element.id}
                    className={`${
                      element.emphasis ? 'italic' : ''
                    } text-center ${
                      element.type === 'h1'
                        ? 'text-3xl font-bold'
                        : 'text-2xl font-semibold'
                    }`}
                  >
                    {element.text}
                  </div>
                )
            )
          ) : (
            <span className='text-gray-400'>Title goes here...</span>
          )}
        </div>

        <div className='flex'>
          <div className='flex justify-center items-center w-1/4'>
            <div className='border-gray-200 border bg-rose-100 p-8 rounded-md flex items-center justify-center'>
              <PhotoIcon />
            </div>
          </div>

          <div
            onDragOver={handleDragOver}
            onDrop={handleDropOnBody}
            className='p-4 w-3/4 flex flex-col justify-start'
            style={{ minHeight: '150px' }}
          >
            {elements.some((element) => element.type === 'p') ? (
              elements.map(
                (element) =>
                  element.type === 'p' && (
                    <div
                      key={element.id}
                      className={`${element.emphasis ? 'italic' : ''} mb-2`}
                    >
                      {element.text}
                    </div>
                  )
              )
            ) : (
              <span className='text-gray-400'>
                Paragraph content goes here...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardTemplate);
