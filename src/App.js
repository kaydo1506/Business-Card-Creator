import React from 'react';
import CardEditor from './components/CardEditor';

function App() {
  return (
    <div className='App p-4 overflow-y-auto'>
      <h1 className='text-3xl font-semibold underline mb-12 text-stone-700 text-center'>
        Business Card Creator
      </h1>
      <CardEditor />
    </div>
  );
}

export default App;
