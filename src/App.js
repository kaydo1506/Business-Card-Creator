import React from 'react';
import CardEditor from './components/CardEditor';

function App() {
  return (
    <div className='App p-4'>
      <h1 className='text-3xl font-bold underline mb-4 text-center'>Business Card Creator</h1>
      <CardEditor/>
    </div>
  );
}

export default App;
