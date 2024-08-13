import { useState } from 'react'
import{Home, Cources, Contact, Footer, Navbar,Teacher, AboutQuick,About}from './Component/index'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='sansSerif'>
      <Navbar/>
      <Home/>
      <AboutQuick/>
      <About/>
      <Cources/>
      <Teacher/>
      <Contact/>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
