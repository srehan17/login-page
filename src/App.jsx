import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import BlankPage from './components/BlankPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logged-in" element={<BlankPage />} />
    </Routes>)
}

export default App
