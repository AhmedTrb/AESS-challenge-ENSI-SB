import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import SolutionPage from './pages/solutionPage'
import LoginPage from './pages/loginPage'
import SignupPage from './pages/signupPage'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<SolutionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </main>
  )
}

export default App
