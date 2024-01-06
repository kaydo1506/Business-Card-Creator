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
- **Add images**: Upload images from the toolbar onto the Image are of the canvas, and drag them onto the card template.
- *Preview and download*: Preview your card dowmload your design.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Access the app here --> https://business-card-creator.vercel.app/

## Components

- **App**: The main component that renders the Business Card Creator application.
- **CardEditor**: Manages the card editing interface, including text and image manipulation.
- **Toolbar**: Provides tools for adding and editing text elements and uploading images.
- **Canvas**: A workspace where users can add, edit, and arrange text and image elements.
- **CardTemplate**: Displays a preview of the business card as it's being created.
- **TextElement**: Represents individual text elements that can be edited and rearranged.
- **ImageElement**: Represents image element to be dropped on the card.
