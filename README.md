# Business Card Creator

A web-based business card creator built with React and TailwindCSS.

## Setup

To run this project, install it locally using npm:

cd ../business-card-creator
npm install
npm start

### Details on how to use the project.

### To use the Business Card Creator:

- **Start by adding text**: Use the Toolbar to add titles (H1, H2) and paragraph text to your card.
- **Edit text**: Click on the edit icon on each text elements to edit them directly on the canvas. You can also toggle italicising your texts.
- **Add images**: Upload images from the toolbar onto the Image area of the canvas, and drag them onto the card template.
- *Preview and download*: Preview your card dowmload your design.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

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
