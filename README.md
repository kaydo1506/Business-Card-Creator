# Business Card Creator

A web-based business card creator built with React and TailwindCSS.

## Setup

To run this project: clone -- npm install -- npm start

### Details on how to use the project.

### To use the Business Card Creator:

- **Add Text**: Use the Toolbar to add titles (H1, H2) and paragraph text to your card.
- **Edit Text**: Easily edit text by clicking on the edit icon next to each text element on the canvas. Customize your text with options to italicize or bold the content.
- **Add Images**: Upload images using the toolbar, which will appear in the Image area of the canvas. You can then drag and drop these images onto the card template. Multiple images can be added to your design.
- **Drag and Drop Interface**: Freely move text and images around your card template to achieve your desired layout.
- **Live Preview**: See your business card take shape in real-time as you add and edit elements.
- **Download**: Once you're satisfied with your creation, download your business card as a PNG file, ready for printing or sharing :).

## Contributing
Make changes as you like, thanks.

Access the app here --> https://business-card-creator.vercel.app/

## Components

- **App**: The main component that renders the Business Card Creator application.
- **CardEditor**: Manages the card editing interface, including text and image manipulation.
- **Toolbar**: Provides tools for adding and editing text elements and uploading images.
- **Canvas**: A workspace where users can add and edit text and image elements.
- **CardTemplate**: Displays a preview of the business card. Text and Image elements can be dropped here and also arranged.
- **TextElement**: Shows thee text element to be edited.
- **ImageElement**: Represents image elements to be dropped on the card. Multiple images can be uploaded and viewed in a slider.


## Mobile Interaction Notes

- **Resizing on Mobile**: Currently, resizing elements on mobile will require you to resize from the edges and it's a bit tricky. For the best experience, I recommend using a desktop.
