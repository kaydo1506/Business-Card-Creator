import React from 'react';

const Toolbar = ({ onAddText, onCycleColor, onResetColor }) => {
  return (
    <div>
      <h2 className='text-3xl'>Toolbar</h2>
      <div className='toolbar bg-gray-200 p-4'>
        <button
          onClick={() => onAddText('h1')}
          className='m-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-32'
        >
          H1
        </button>
        <button
          onClick={() => onAddText('h2')}
          className='m-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-32'
        >
          H2
        </button>
        <button
          onClick={() => onAddText('p')}
          className='m-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-32'
        >
          Paragraph
        </button>
        <button
          onClick={onCycleColor}
          className='m-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-32'
        >
          Select Color
        </button>
        <button
          onClick={onResetColor}
          className='m-2 bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-32'
        >
          Reset Color
        </button>
        {/* More tools can be added here */}
      </div>
    </div>
  );
};

export default Toolbar;
