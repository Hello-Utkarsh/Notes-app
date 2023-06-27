import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
import { NoteState } from './context/notes/NoteState';
// const NoteState = require('./context/notes/NoteState')
import About from './components/About';

function App() {

  return (
    <div className='bg-dark text-white'>
      <NoteState>
        <BrowserRouter>
          <Navbar />

          <Routes>

            <Route path='/' index element={
              <Home />
            } />
            <Route path='/About' element={
              <About />
            } />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  )
}

export default App
