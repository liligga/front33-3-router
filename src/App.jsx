import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import AboutUsPage from './pages/AboutUsPage'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutUsPage />} />

        <Route path='*' element={<h4>Ошибка 404: Такой страницы не существует</h4>} />
      </Routes>
    </>
  )
}

export default App
