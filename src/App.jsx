import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/experience" element={<Home />}/>
          <Route path="/projects" element={<Home />}/>
          <Route path="/about" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
