import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';
import { v4 as uuidv4 } from 'uuid';
import CardTemplate from './CardTemplate';

const CardEditor = () => {
  const [texts, setTexts] = useState([]);
  const [cardElements, setCardElements] = useState([]);
  const [images, setImages] = useState([]);

  const addText = (type) => {
    const newText = {
      id: uuidv4(),
      text: `New ${type}`,
      type: type,
      emphasis: false,
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
  const handleEmphasis = () => {
    const updatedTexts = texts.map((text) => ({
      ...text,
      emphasis: !text.emphasis, // Toggle the emphasis property
    }));
    setTexts(updatedTexts);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDropOnTitle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const elementId = e.dataTransfer.getData('text/plain');
    const elementToAdd = texts.find(
      (element) => element.id.toString() === elementId
    );

    if (elementToAdd) {
      const hasH1 = cardElements.some((el) => el.type === 'h1');
      const hasH2 = cardElements.some((el) => el.type === 'h2');

      if (elementToAdd.type === 'h1' && hasH1) {
        alert('A H1 title already exists. Please add a H2 title.');
        return;
      } else if (
        (elementToAdd.type === 'h1' || elementToAdd.type === 'h2') &&
        hasH2
      ) {
        alert(
          'Both H1 and H2 titles exist. Please edit your text on the canvas before dropping.'
        );
        return;
      } else if (elementToAdd.type !== 'h1' && elementToAdd.type !== 'h2') {
        alert('Please drop only titles (h1, h2) here.');
        return;
      }

      setCardElements((prevElements) => [...prevElements, { ...elementToAdd }]);
    }
  };

  const handleDropOnBody = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const elementId = e.dataTransfer.getData('text/plain');
    const elementToAdd = texts.find(
      (element) => element.id.toString() === elementId
    );

    if (elementToAdd && elementToAdd.type === 'p') {
      setCardElements((prevElements) => {
        const newElements = [...prevElements, { ...elementToAdd }];
        return newElements;
      });
    } else {
      alert('Please drop only paragraph texts here.');
    }
  };

  const handleRemoveElementFromCanvas = (elementId) => {
    setTexts((prevElements) =>
      prevElements.filter((element) => element.id !== elementId)
    );
  };
  const handleResetCardTemplate = () => {
    setCardElements([]);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const src = URL.createObjectURL(file);
      const newImage = {
        id: uuidv4(),
        src: src,
      };
      setImages([...images, newImage]);
    }
  };
  const handleDropOnImageArea = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const elementId = e.dataTransfer.getData('text/plain');
    const elementToAdd = images.find(
      (image) => image.id.toString() === elementId
    );

    if (elementToAdd) {
      // this is to remove any existing image from cardElements just to because only one image can exist on the businesscard at a time
      const elementsWithoutImages = cardElements.filter(
        (element) => element.type !== 'image'
      );

      // then add the new image
      setCardElements([
        ...elementsWithoutImages,
        { ...elementToAdd, type: 'image' },
      ]);
    } else {
      alert('Please drop only images here.');
    }
  };

  console.log(images);
  console.log(cardElements);

  return (
    <div className='flex flex-col md:flex-row justify-around h-screen'>
      <div className='w-full md:w-2/5 flex flex-col'>
        <Toolbar
          onAddText={addText}
          onEmphasis={handleEmphasis}
          onImageUpload={handleImageUpload}
        />

        <Canvas
          texts={texts}
          onUpdateText={updateText}
          onDragStart={handleDragStart}
          onRemoveElement={handleRemoveElementFromCanvas}
          images={images}
        />
      </div>
      <div className='w-full md:w-2/5'>
        <CardTemplate
          onTitleDrop={handleDropOnTitle}
          onBodyDrop={handleDropOnBody}
          elements={cardElements}
          onCardTemplateReset={handleResetCardTemplate}
          onImageDrop={handleDropOnImageArea}
        />
      </div>
    </div>
  );
};

export default CardEditor;
