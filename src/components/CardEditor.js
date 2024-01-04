import React from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

const CardEditor = () => {
  return (
    <div className='card-editor'>
      <h2 className='text-xl font-semibold'>Card Editor</h2>
      <Toolbar/>
      <Canvas/>
    </div>
  );
};

export default CardEditor;
