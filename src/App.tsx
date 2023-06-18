import React from 'react';
import pikachuImage from './Images/pika.png'
import PoksyForm from './Components/PoksyForm';
import './globalCss.css';

function App() {
  return (
    <div className='flex-col bg-zinc-700 text-white items-center py-5 justify-center text-center h-screen'>
        <h1 className=' py-5 text-4xl text-center font-extrabold   md:text-5xl lg:text-6xl '>Poksy</h1>
          <p className=''>You can't expect to win every single battle, 
            but love's worth fighting for, and if you're 
            brave and courageous and never quit, you can come out a winner, just like me.
          </p>
        {/* <img className='relative mx-auto py-10 rounded-full w-80 h-80' src={pikachuImage} alt="Pikachu" /> */}
        <PoksyForm />
    </div>
  );
}

export default App;
