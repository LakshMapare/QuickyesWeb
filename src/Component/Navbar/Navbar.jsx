import React, { useState } from 'react'
import{HiMenuAlt1, HiX} from 'react-icons/hi'
import logo from '../../assets/logo.png'
import LinkNav from './LinkNav'
import { navLinks } from '../../Data'
import MobileNavLink from './MobileNavLink'

const Navbar = () => {
const[toogle,setToogle] = useState(false);

  return (
    <div className='fixed w-full top-0 left-0 z-20 shadow-md'>
      <div>
        <div className='container py-0.5 mx-auto flex  justify-between px-2'>
          <div className='flex items-center gap-4'>
            <HiMenuAlt1 className='text-3xl text-black sm:hidden cursor-pointer ' onClick={()=>setToogle(true)} />
            <a href="#home"><img  className='w-[150px] h-[100px] p-2  items-center cursor-pointer' src={logo } alt="Quickyes"   /></a>
          </div>
          <div className=' sm:flex items-center hidden' >
            {navLinks.map((navLink)=>{
              return<LinkNav  key={navLink.id}{...navLink}/>
            })}
          </div>
          {toogle && <div className='fixed h-full w-96 top-0 left-0 z-20 bg-teal-500 text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8  '>
            {navLinks.map((navLink)=>{-600
              return<MobileNavLink key={navLink.id}{...navLink} setToogle={setToogle}/>
            })}
            <HiX className='absolute right-12 top-12 text-3xl cursor-pointer 'onClick={(prev)=> setToogle(!prev)} />
          </div>

          }
          

        </div>
      </div>
    </div>
  )
}

export default Navbar
