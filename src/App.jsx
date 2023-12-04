import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/Projects'


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/experience" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
