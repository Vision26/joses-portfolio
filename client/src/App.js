import React from 'react'
// import {useLoadingContext} from 'react-router-loading'
import { Routes, Route, Navigate, useLoadingContext } from 'react-router-loading'
import ReactLoading from 'react-loading'
import NavBar from './NavBar'
import './App.css'
import Jose from './components/Jose'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './Footer'


function App() {
  const loadingContext = useLoadingContext()
  const loading = async() => {
  loadingContext.done()
}
const MyLoadingScreen = () =>    <div className='loading-container'><div className='loading'><ReactLoading className='react-loading' type="cylon" color="black" 
height={100} width={650} delay={400}/></div></div>


  return (
    <div className="App">
      <NavBar />
      <Routes loadingScreen={MyLoadingScreen} maxLoadingTime={5050}>
        <Route
          exact path="/"
          element={<Jose />}
          loading={loading}
        />
        <Route
          path="/contact"
          element={<Contact />}
          loading={loading}
        />
          <Route
          path="/projects"
          element={<Projects />}
          loading={loading}
        />
        <Route 
        path="/about"
        element={<About />}
        loading={loading}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
