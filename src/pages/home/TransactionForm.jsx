import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"
function TransactionForm({uid}) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const {addDocument, response} = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            name, amount, uid
        })
    }

    useEffect(() => {
      console.log(response)
      if(response.success) {
        setName('')
        setAmount('')
      }
    }, [response.success])
  return (
    <div>
        <form onSubmit={handleSubmit} className="bg-zinc-300 p-3 rounded">
        <label className='block mb-5'>
          <span className='block text-base'>Name:</span>
          <input required onChange={(e) => {setName(e.target.value)}} placeholder="text" type="name" value={name} className='placeholder:text-base border-2 border-l-neutral-300 rounded focus:border-2 focus:border-green-300 focus:outline-none px-2 py-1'/>
        </label>
        <label className='block mb-5'>
          <span className='block text-base'>Amount:</span>
          <input required onChange={(e) => {setAmount(e.target.value)}} placeholder="amount" type="number" value={amount} className='placeholder:text-base border-2 border-l-neutral-300 rounded focus:border-2 focus:border-green-300 focus:outline-none px-2 py-1'/>
        </label>
        <button type='submit' className='border-2 px-2 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white text-base' >Add</button>
      </form>
     </div>
  )
}

export default TransactionForm