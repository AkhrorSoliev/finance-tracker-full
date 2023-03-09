import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-green-300 p-5 mb-10'>
        <nav className='flex justify-between items-center max-w-5xl mx-auto'>
            <Link to="/">
                <h1 className="font-bold text-2xl">myMoney</h1>
            </Link>

            <ul className='flex gap-5 text-base'>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sing up</Link>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar