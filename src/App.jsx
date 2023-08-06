import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Help from './Components/Help';
import Cabinet from './Components/Cabinet';
import OrderPage from './Components/OrderPage';



const App = () => {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path = '*' element = {<Main/>}/>
        <Route path="/help" element={<Help />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path='/order' element={<OrderPage />}/>
      </Routes>
    </div>
  )
  
}


export default App
