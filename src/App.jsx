import { Routes, Route } from 'react-router-dom'

import './App.css'
import MainPage from './pages/MainPage'
import AboutUsPage from './pages/AboutUsPage'
import Layout from './components/Layout'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='about' element={<AboutUsPage />} />

          <Route path='*' element={<h4>Ошибка 404: Такой страницы не существует</h4>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
