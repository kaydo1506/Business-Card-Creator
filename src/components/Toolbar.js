import React from 'react';
import { Upload } from '../Icons/Icons';

const ToolbarButton = ({ onClick, children, additionalClasses = '' }) => (
  <button
    onClick={onClick}
    className={`bg-amber-700 hover:bg-amber-900 shadow-lg text-white text-xs font-semibold py-2 px-2 rounded transition duration-200 ease-in-out ${additionalClasses}`}
  >
    {children}
  </button>
);
const Toolbar = ({ onStateUpdate, onEmphasis, onImageUpload, onBold }) => {
  return (
    <div className='my-4 md:mr-8'>
      <h2 className='text-xl mb-4 font-semibold text-gray-700'>Toolbar</h2>
      <div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
        <ToolbarButton onClick={() => onStateUpdate('h1', '')}>
          H1
        </ToolbarButton>
        <ToolbarButton onClick={() => onStateUpdate('h2', '')}>
          H2
        </ToolbarButton>
        <ToolbarButton onClick={() => onStateUpdate('p', '')}>
          Paragraph
        </ToolbarButton>

        <input
          type='file'
          accept='image/*'
          id='image-upload'
          style={{ display: 'none' }}
          onChange={onImageUpload}
        />
        <label
          htmlFor='image-upload'
          className='bg-amber-700 hover:bg-amber-900 shadow-lg text-white font-semibold py-2 px-2 rounded transition duration-200 ease-in-out cursor-pointer'
        >
          <Upload />
        </label>
        <ToolbarButton onClick={onEmphasis}>
          <em>Italics</em>
        </ToolbarButton>
        <ToolbarButton onClick={onBold}>
          <strong>Bold</strong>
        </ToolbarButton>
      </div>
    </div>
  );
};

export default React.memo(Toolbar);
