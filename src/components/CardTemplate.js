import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { Delete } from '../Icons/Icons';
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';

const CardTemplate = ({ elements, onDrop, onRemoveCardElement }) => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const downloadCardAsImage = async () => {
    const cardElement = document.getElementById('card-template'); // Ensure your card template has this ID
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
    onRemoveCardElement(elementId);
  };
   const handleToggleDeleteButton = (elementId) => {
     // Toggle the selected element
     setSelectedElement((prevSelectedElement) =>
       prevSelectedElement === elementId ? null : elementId
     );
   };
  return (
    <div className='mt-12 mb-8 md:mb-0 md:max-w-xl'>
      <div className='mb-4 '>
        <h2 className='text-xl font-semibold text-gray-700'>Business Card</h2>
      </div>

      <div
        className='bg-white border border-orange-200 shadow-2xl rounded-lg p-6 h-[280px] overflow-y-auto '
        id='card-template'
        onDrop={onDrop}
        onDragOver={handleDragOver}
      >
        {elements.length === 0 && (
          <div className='flex items-center justify-center h-full'>
            <p className='text-gray-400 text-center text-sm '>
              Drag and drop elements here to create your business card.
            </p>
          </div>
        )}
        {elements.map((element) => {
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
                      elements.length > 0
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
        disabled={elements.length === 0}
      >
        Download Card
      </button>
    </div>
  );
};

export default React.memo(CardTemplate);
