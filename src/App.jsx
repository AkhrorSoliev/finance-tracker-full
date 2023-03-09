import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="font-roboto text-xl">
     <Router>
        <Navbar/>
        <div className='max-w-5xl mx-auto px-5'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
     </Router>
    </div>
  )
}

export default App
