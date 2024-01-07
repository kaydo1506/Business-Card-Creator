import React, { useContext } from 'react';
import { Context } from './Context';
import Toolbar from './Toolbar';
import Canvas from './Canvas';
import CardTemplate from './CardTemplate';

const CardEditor = () => {
  const {
    state,
    images,
    cardElements,
    removeCardElement,
    addElement,
    updateState,
    handleDragStart,
    handleDrop,
    handleBold,
    handleEmphasis,
    handleImageUpload,
    handleDeleteImage
  } = useContext(Context);

  return (
    <div className='flex flex-col md:flex-row justify-around'>
      <div className='w-full md:w-2/5 flex flex-col md:border-r-4 md:border-gray-300 md:h-screen'>
        <Toolbar
          onEmphasis={handleEmphasis}
          onImageUpload={handleImageUpload}
          onBold={handleBold}
          onStateUpdate={updateState}
        />

        <Canvas
          setState={addElement}
          state={state}
          images={images}
          onUpdateText={updateState}
          onDragStart={handleDragStart}
          onAddCardElements={cardElements}
          onDeleteImage={handleDeleteImage}
        />
      </div>
      <div className='w-full md:w-2/5'>
        <CardTemplate
          elements={cardElements}
          onDrop={handleDrop}
          onRemoveCardElement={removeCardElement}
        />
      </div>
    </div>
  );
};

export default CardEditor;
