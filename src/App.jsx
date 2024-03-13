import { Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import AboutUsPage from './pages/AboutUsPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='about' element={<AboutUsPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:postId' element={<SinglePostPage />} />
          <Route path='login' element={<LoginPage />} />

          <Route path='*' element={<h4>Ошибка 404: Такой страницы не существует</h4>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
