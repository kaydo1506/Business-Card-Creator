import React from 'react';
import { Upload } from '../Icons/Icons';

const Toolbar = ({ onAddText, onEmphasis, onImageUpload }) => {
  return (
    <div className='my-4'>
      <h2 className='text-2xl mb-4 font-semibold text-gray-700'>Toolbar</h2>
      <div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
        <button
          onClick={() => onAddText('h1')}
          className='bg-zinc-500 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out'
        >
          H1
        </button>
        <button
          onClick={() => onAddText('h2')}
          className='bg-zinc-500 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out'
        >
          H2
        </button>
        <button
          onClick={() => onAddText('p')}
          className='bg-zinc-500 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out'
        >
          Paragraph
        </button>

        <input
          type='file'
          accept='image/*'
          id='image-upload'
          style={{ display: 'none' }}
          onChange={onImageUpload}
        />
        <label
          htmlFor='image-upload'
          className='bg-zinc-500 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out cursor-pointer'
        >
          <Upload />
        </label>
        <button
          onClick={onEmphasis}
          className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out'
        >
          <em>Italics</em>
        </button>
      </div>
    </div>
  );
};

export default React.memo(Toolbar);
