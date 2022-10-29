import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Create from './Components/Create'
import Edit from './Components/Edit'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App