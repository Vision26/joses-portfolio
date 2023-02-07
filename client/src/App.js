import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'
import Jose from './components/Jose'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/jose"
          element={<Jose />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
          <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
    </div>
  )
}

export default App
