import Toolbar from './Toolbar';
import Canvas from './Canvas';
import CardTemplate from './CardTemplate';

const CardEditor = () => {

  return (
    <div className='flex flex-col md:flex-row justify-around'>
      <div className='w-full md:w-2/5 flex flex-col md:border-r-4 md:border-gray-300 md:h-screen'>
        <Toolbar />
        <Canvas />
      </div>
      <div className='w-full md:w-2/5'>
        <CardTemplate />
      </div>
    </div>
  );
};

export default CardEditor;
