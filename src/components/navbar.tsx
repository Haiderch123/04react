import React from 'react'
import { MenubarDemo } from './menubar'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-500 flex items-center justify-around ' >
      <div>
        <p>haider ali</p>
      </div>
      <div>
        <MenubarDemo />
      </div>
      <div>
        <p>Mujtaba</p>
      </div>
    </div>
  )
}

export default Navbar
