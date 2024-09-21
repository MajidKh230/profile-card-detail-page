import React from 'react'
// import ProfileCard from './components/ProfileCard'
// import { cardData } from './Utils/cardData'
// import Detail from './components/Detail'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'


const App = () => {
  
  return (
  <div className='font-[Poppins]'>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/detailpage/:id' element={<Detail/>} />
  <Route path='*' element={'Error'} />
</Routes>
 
  </div>
  )
}

export default App
