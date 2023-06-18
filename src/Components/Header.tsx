import React from 'react'
import '../input.css'
import pikachuImg from '../Images/Pikachu.png'
function Header() {
  return (
    <div>
        <header className='text-center m-auto text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl '>
            <h2>Poksy</h2>
        </header>
        <img src={pikachuImg} alt="Pikachu" />
    </div>
  )
}

export default Header