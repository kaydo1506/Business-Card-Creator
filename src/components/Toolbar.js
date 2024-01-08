import React, {useContext} from 'react';
import { Upload } from '../Icons/Icons';
import { Context } from './Context';

const ToolbarButton = ({ onClick, children, additionalClasses = '' }) => (
  <button
    onClick={onClick}
    className={`bg-amber-700 hover:bg-amber-900 shadow-lg text-white text-xs font-semibold py-2 px-2 rounded transition duration-200 ease-in-out ${additionalClasses}`}
  >
    {children}
  </button>
);
const Toolbar = () => {
  const {handleEmphasis, handleImageUpload, handleBold, updateState} = useContext(Context)
  return (
    <div className='my-4 md:mr-8'>
      <h2 className='text-xl mb-4 font-semibold text-gray-700'>Toolbar</h2>
      <div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
        <ToolbarButton onClick={() => updateState('h1', '')}>
          H1
        </ToolbarButton>
        <ToolbarButton onClick={() => updateState('h2', '')}>
          H2
        </ToolbarButton>
        <ToolbarButton onClick={() => updateState('p', '')}>
          Paragraph
        </ToolbarButton>

        <input
          type='file'
          accept='image/*'
          id='image-upload'
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <label
          htmlFor='image-upload'
          className='bg-amber-700 hover:bg-amber-900 shadow-lg text-white font-semibold py-2 px-2 rounded transition duration-200 ease-in-out cursor-pointer'
        >
          <Upload />
        </label>
        <ToolbarButton onClick={handleEmphasis}>
          <em>Italics</em>
        </ToolbarButton>
        <ToolbarButton onClick={handleBold}>
          <strong>Bold</strong>
        </ToolbarButton>
      </div>
    </div>
  );
};

export default React.memo(Toolbar);
