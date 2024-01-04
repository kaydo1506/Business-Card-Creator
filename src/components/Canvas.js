import React, { useState } from 'react';
import TextElement from './TextElement';

const Canvas = () => {
  const [texts, setTexts] = useState([]);
  const [selectedTextId, setSelectedTextId] = useState(null);

  const addText = () => {
    const newText = { id: Date.now(), text: 'New Text' };
    setTexts([...texts, newText]);
  };

  const editText = (id) => {
    // Logic to edit text
    setSelectedTextId(id);
  };

  return (
    <div className='canvas bg-white border-2 border-gray-300 p-4'>
      {texts.map((textObj) => (
        <TextElement
          key={textObj.id}
          id={textObj.id}
          text={textObj.text}
          onEdit={editText}
        />
      ))}
      {/* Other elements will also go here */}
    </div>
  );
};

export default Canvas;
