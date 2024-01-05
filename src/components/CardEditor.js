import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';
import CardTemplate from './CardTemplate';

const CardEditor = () => {
  const [texts, setTexts] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colorOptions = ['cyan', 'rose', 'amber', 'stone']; // raaaandom colors -_-
  const [cardElements, setCardElements] = useState([]);

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

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
    console.log(id)
  };

  const handleDropOnCardTemplate = (e) => {
      console.log('Dropped element ID:', '');
    e.preventDefault();
    const elementId = e.dataTransfer.getData('text/plain');
   

    const elementToAdd = texts.find((element) => element.id === elementId);
    if (elementToAdd) {
      setCardElements((prevElements) => [...prevElements, { ...elementToAdd }]);
    }
  };

  return (
    <div className='flex'>
      <div className='flex flex-col w-1/3'>
        <Toolbar
          onAddText={addText}
          onResetColor={handleResetColor}
          onCycleColor={handleCycleColor}
        />
        <Canvas
          texts={texts}
          onUpdateText={updateText}
          onDragStart={handleDragStart}
        />
      </div>
      <div className='w-2/3'>
        <CardTemplate
          onDrop={handleDropOnCardTemplate}
          elements={cardElements}
        />
      </div>
    </div>
  );
};

export default CardEditor;
