import React from 'react';

const Toolbar = () => {
  return (
    <div className='toolbar bg-gray-200 p-4'>
      <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add Text
      </button>
      <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add Image
      </button>
      {/* More tools can be added here */}
    </div>
  );
};

export default Toolbar;
