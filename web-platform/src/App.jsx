import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import SolutionPage from './pages/solutionPage'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<SolutionPage />} />
      </Routes>
    </main>
  )
}

export default App
