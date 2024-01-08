import React, { useState, useContext } from 'react';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import { Color } from '../Icons/Icons';
import { Context } from './Context';
import { Delete } from '../Icons/Icons';
import { Resizable } from 're-resizable';

const CardTemplate = () => {
  const { cardElements, handleDrop, removeCardElement } = useContext(Context);
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentBgColor, setCurrentBgColor] = useState('rgb(228 228 231)');
  const colors = [
    'rgb(22 78 99)',
    'rgb(20 83 45)',
    'rgb(2 6 23)',
    'rgb(107 114 128)',
    'rgb(249 250 251)',
    'rgb(120 53 15)',
    'rgb(37 99 235)',
  ];

  const changeBgColor = () => {
    setCurrentBgColor((prevColor) => {
      const currentIndex = colors.indexOf(prevColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      return colors[nextIndex];
    });
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const downloadCardAsImage = async () => {
    const cardElement = document.getElementById('card-template');
    const canvas = await html2canvas(cardElement);
    const image = canvas.toDataURL('image/png', 1.0);

    // Create a link to download the image
    let downloadLink = document.createElement('a');
    downloadLink.href = image;
    downloadLink.download = 'business-card.png';

    // Append link to the body and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const handleElementDelete = (elementId) => {
    removeCardElement(elementId);
  };

  const handleToggleDeleteButton = (elementId) => {
    // Toggle the selected element
    setSelectedElement((prevSelectedElement) =>
      prevSelectedElement === elementId ? null : elementId
    );
  };
  return (
    <div className='mt-12 mb-8 md:mb-0 md:max-w-xl'>
      <div className='mb-4 flex justify-between'>
        <h2 className='text-xl font-semibold text-gray-700'>Business Card</h2>
        <button onClick={changeBgColor} className='hover:scale-75'>
          <Color />
        </button>
      </div>

      <div
        className='border-orange-200 shadow-2xl rounded-lg p-6 h-[280px] overflow-y-auto'
        style={{
          backgroundColor: currentBgColor, // Dynamic background color
          borderColor: '#fed7aa', // Tailwind's orange-200
          borderWidth: '2px', // Default border width
          borderStyle: 'solid', // Default border style
        }}
        id='card-template'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {cardElements.length === 0 && (
          <div className='flex items-center justify-center h-full'>
            <p className='text-gray-400 text-center text-sm '>
              Drag and drop cardElements here to create your business card.
            </p>
          </div>
        )}
        {cardElements.map((element) => {
          const textStyle = {
            fontStyle: element.emphasis ? 'italic' : 'normal',
            fontWeight: element.bold ? 'bold' : 'normal',
          };

          return (
            <Draggable key={element.id}>
              <Resizable>
                <div
                  onClick={() => handleToggleDeleteButton(element.id)} // Toggle delete button on tap
                  className={`relative rounded-md ${
                    selectedElement === element.id
                      ? 'border-2 border-amber-500'
                      : 'hover:border-2 hover:border-amber-500'
                  }`}
                >
                  {selectedElement === element.id && (
                    <button
                      onClick={() => handleElementDelete(element.id)}
                      className='absolute top-0 right-0 bg-white rounded-full '
                    >
                      <Delete />
                    </button>
                  )}

                  {element.type === 'image' && (
                    <img
                      draggable='false'
                      src={element.content}
                      alt='Element'
                      className='rounded-md'
                    />
                  )}

                  {element.type === 'h1' && (
                    <h1 style={textStyle} className='text-2xl'>
                      {element.content}
                    </h1>
                  )}
                  {element.type === 'h2' && (
                    <h2 style={textStyle} className='text-xl'>
                      {element.content}
                    </h2>
                  )}
                  {element.type === 'p' && (
                    <p style={textStyle} className='text-base'>
                      {element.content}
                    </p>
                  )}
                </div>
              </Resizable>
            </Draggable>
          );
        })}
      </div>
      <button
        onClick={downloadCardAsImage}
        className={`mt-4 px-4 py-2 text-white font-semibold rounded float-right
                    ${
                      cardElements.length > 0
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
        disabled={cardElements.length === 0}
      >
        Download Card
      </button>
    </div>
  );
};

export default React.memo(CardTemplate);
