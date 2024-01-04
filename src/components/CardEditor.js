import React from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

const CardEditor = () => {
    const handleAddText = () => {
      // Logic to add text to Canvas
    };
  return (
    <div className='card-editor'>
      <h2 className='text-xl font-semibold'>Card Editor</h2>
      <Toolbar onAddText={handleAddText}/>
      <Canvas/>
    </div>
  );
};

export default CardEditor;
