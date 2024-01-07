import React from 'react';
import { CardProvider } from './components/Context';
import CardEditor from './components/CardEditor';

function App() {
  return (
    <CardProvider>
      <div className='App p-4 overflow-y-auto bg-neutral-100 h-screen'>
        <h1 className='text-3xl font-semibold underline mb-12 text-stone-700 text-center'>
          Business Card Creator
        </h1>
        <CardEditor />
      </div>
    </CardProvider>
  );
}

export default App;
