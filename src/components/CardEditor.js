import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

const CardEditor = () => {
  const [texts, setTexts] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colorOptions = ['cyan', 'rose', 'amber', 'stone']; // Define color options

  const handleCycleColor = () => {
      const nextColorIndex = (currentColorIndex + 1) % colorOptions.length;
      setCurrentColorIndex(nextColorIndex);
      const nextColor = colorOptions[nextColorIndex];
      changeTextColor(nextColor);
  };

  const handleResetColor = () => {
      setCurrentColorIndex(0); // Reset color index
      changeTextColor('black');
  };


  
  const addText = (type) => {
    const newText = {
      id: Date.now(),
      text: `New ${type}`,
      type: type,
      color: 'black',
    };
    setTexts([...texts, newText]);
  };

  const updateText = (id, newText) => {
    const updatedTexts = texts.map((text) => {
      if (text.id === id) {
        return { ...text, text: newText };
      }
      return text;
    });
    setTexts(updatedTexts);
  };

  const changeTextColor = (color) => {
    setTexts(texts.map((text) => ({ ...text, color })));
  };

  return (
    <div className='card-editor'>
      <Toolbar onAddText={addText} onResetColor={handleResetColor} onCycleColor={handleCycleColor} />
      <Canvas texts={texts} onUpdateText={updateText} />
    </div>
  );
};

export default CardEditor;
