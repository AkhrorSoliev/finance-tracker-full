import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {error, isPending, signup} = useSignup()

  const hanldeSubmit = (e) => {
    e.preventDefault()
    signup(
      displayName,
      email,
      password
    )
  }

  return (
    <div className='flex justify-center'>
      <form onSubmit={hanldeSubmit}>
        <label className='block mb-5'>
          <span className='block text-base'>displayName:</span>
          <input onChange={(e) => {setDisplayName(e.target.value)}} placeholder="display name" type="text" className='placeholder:text-base border-2 border-l-neutral-300 rounded focus:border-2 focus:border-green-300 focus:outline-none px-2 py-1'/>
        </label>
        <label className='block mb-5'>
          <span className='block text-base'>email:</span>
          <input onChange={(e) => {setEmail(e.target.value)}} placeholder="email" type="email" className='placeholder:text-base border-2 border-l-neutral-300 rounded focus:border-2 focus:border-green-300 focus:outline-none px-2 py-1' />
        </label>
        <label className='block mb-5'>
          <span className='block text-base'>password:</span>
          <input onChange={(e) => {setPassword(e.target.value)}} placeholder="password" type="password" className='placeholder:text-base border-2 border-l-neutral-300 rounded focus:border-2 focus:border-green-300 focus:outline-none px-2 py-1' />
        </label>
        {!isPending && <button type='submit' className='border-2 px-2 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white text-base'>SignUp</button>}
        {isPending && <button type='submit' className='border-2 px-2 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white text-base' disabled>Loading...</button>}
      
        {error && <div>{error}</div>}
      </form>
    </div>
  )
}

export default Signup