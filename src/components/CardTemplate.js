import React from 'react';
import html2canvas from 'html2canvas';
import { PhotoIcon, Delete } from '../Icons/Icons';

const CardTemplate = ({
  elements,
  onTitleDrop,
  onBodyDrop,
  onImageDrop,
  onCardTemplateReset,
}) => {
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
  const imageElement = elements.find((element) => element.type === 'image');
  return (
    <div className='mt-12 mb-8 md:mb-0'>
      <div className='flex justify-between items-center mb-4 '>
        <h2 className='text-xl font-semibold text-gray-700'>Business Card</h2>
        <span onClick={onCardTemplateReset} className='cursor-pointer '>
          <Delete />
        </span>
      </div>
      <div
        className='bg-white border border-orange-200 shadow-2xl rounded-lg p-6 h-[280px] overflow-y-auto'
        id='card-template'
      >
        {/*TITLE COMTAINER---------------------------------------------------------------------------------------- */}
        <div
          onDragOver={handleDragOver}
          onDrop={onTitleDrop}
          className='border-gray-200 border p-4 rounded-md mb-4 flex justify-center items-center'
          style={{ minHeight: '60px' }}
        >
          {elements.some(
            (element) => element.type === 'h1' || element.type === 'h2'
          ) ? (
            elements.map(
              (element, id) =>
                (element.type === 'h1' || element.type === 'h2') && (
                  <div
                    key={id}
                    className={`${
                      element.emphasis ? 'italic' : ''
                    } text-center ${
                      element.type === 'h1'
                        ? 'text-2xl font-bold'
                        : 'text-xl font-semibold'
                    }`}
                  >
                    {element.text}
                  </div>
                )
            )
          ) : (
            <span className='text-gray-400 text-sm'>Title goes here...</span>
          )}
        </div>

        <div className='flex'>
          {/*IMAGE COMTAINER---------------------------------------------------------------------------------------- */}
          <div className='flex justify-center items-center w-1/4 '>
            <div
              className='border-gray-200 border bg-orange-100  rounded-md flex items-center justify-center'
              onDrop={onImageDrop}
              onDragOver={handleDragOver}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {imageElement ? (
                <img
                  draggable='false'
                  src={imageElement.src}
                  alt='id'
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    resize: 'both',
                    overflow: 'auto',
                  }}
                />
              ) : (
                <div className='p-8'>
                  <PhotoIcon />
                </div>
              )}
            </div>
          </div>

          {/*BODY COMTAINER---------------------------------------------------------------------------------------- */}
          <div
            onDragOver={handleDragOver}
            onDrop={onBodyDrop}
            className='p-4 w-3/4 flex flex-col justify-start'
            style={{ minHeight: '150px' }}
          >
            {elements.some((element) => element.type === 'p') ? (
              elements.map(
                (element, id) =>
                  element.type === 'p' && (
                    <div
                      key={id}
                      className={`${element.emphasis ? 'italic' : ''} mb-2`}
                    >
                      {element.text}
                    </div>
                  )
              )
            ) : (
              <span className='text-gray-400 text-sm'>
                Paragraph content goes here...
              </span>
            )}
          </div>
        </div>
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
