import { Card } from 'react-bootstrap'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import CatProfile from './CatProfile'

function App() {
  return <HashRouter>
    <Routes>
      <Route index path="/" element={<Profile/>}></Route>
      <Route index path="/cat" element={<CatProfile/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
