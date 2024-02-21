import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import BlankPage from './components/BlankPage.jsx'
import BlankPageRegistered from './components/BlankPageRegistered.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registered" element={<BlankPageRegistered />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logged-in" element={<BlankPage />} />
    </Routes>)
}

export default App
