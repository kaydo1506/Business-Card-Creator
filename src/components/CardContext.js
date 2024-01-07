// CardContext.js
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [state, setState] = useState({
    type: 'p',
    content: '',
    bold: false,
    emphasis: false,
  });
  const [cardElements, setCardElements] = useState([]);
  const [images, setImages] = useState([
    { id: '1', src: '/images/Rachael.png' },
    { id: '2', src: '/images/3.webp' },
    { id: '3', src: '/images/2.webp' },
    { id: '4', src: '/images/1.jpg' },
  ]);
  const addElement = (type, content = '') => {
    const newElement = {
      type: type,
      content: content,
      bold: false,
      emphasis: false,
    };
    setState(newElement);
  };
  const updateState = (type, content) => {
    setState({ ...state, type, content: content || state.content });
  };
  const handleEmphasis = () => {
    setState({ ...state, emphasis: !state.emphasis });
  };
  const handleBold = () => {
    setState({ ...state, bold: !state.bold });
  };
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('application/reactflow', id);
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDrop = (e, dropType) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedData = e.dataTransfer.getData('application/reactflow');

    // Check if the dropped data is a text type ('p', 'h1', 'h2')
    if (['p', 'h1', 'h2'].includes(droppedData)) {
      const newTextElement = {
        id: uuidv4(),
        type: droppedData,
        content: state.content, // Default content, to be edited by user
        bold: state.bold,
        emphasis: state.emphasis,
      };
      setCardElements((prevElements) => [...prevElements, newTextElement]);
    } else {
      // Find the image based on droppedData ID
      const imageToAdd = images.find((image) => image.id === droppedData);
      if (imageToAdd) {
        const newImageElement = {
          id: uuidv4(),
          type: 'image',
          content: imageToAdd.src, // Use the image source URL
        };
        // Add the new image element without removing existing images
        setCardElements((prevElements) => [...prevElements, newImageElement]);
      }
    }
  };

  // Resizing the image on upload using HTMLCanvasElement to draw the uploaded image with the desired dimensions, and then converting this canvas back to an image URL.
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // Define the size for the resized image
          const maxWidth = 100; // Max width for the image
          const maxHeight = 100; // Max height for the image
          let { width, height } = img;

          // Calculate the width and height, maintaining aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          // Create a canvas and draw the resized image onto it
          const canvas = document.createElement('canvas');
          canvas.width = width * 2;
          canvas.height = height * 2;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width * 2, height * 2);

          // Convert canvas to image URL and update state
          const resizedSrc = canvas.toDataURL('image/png', 0.9);
          setImages((prevImages) => [
            ...prevImages,
            { id: uuidv4(), src: resizedSrc },
          ]);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove Image from canvas/Elements
  const handleDeleteImage = (id) => {
    console.log('Delete');
    setImages(images.filter((image) => image.id !== id));
  };

  // Remove element from card
  const removeCardElement = (elementId) => {
    setCardElements((prevElements) =>
      prevElements.filter((element) => element.id !== elementId)
    );
  };

  return (
    <CardContext.Provider
      value={{
        state,
        images,
        addElement,
        cardElements,
        removeCardElement,
        updateState,
        handleDragStart,
        handleDrop,
        handleBold,
        handleEmphasis,
        handleImageUpload,
        handleDeleteImage,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
