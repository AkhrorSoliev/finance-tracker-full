import React from 'react'

function TransactionList({ transactions }) {
  return (
    <>
        {transactions.map((transaction) => {
            return (
                <div key={transaction.id} className="flex justify-between max-w-md w-full border-l-4 border-t-slate-300 bg-slate-100 mb-3 px-2 py-3 border-l-green-500">
                    <h1>{transaction.name}</h1>
                    <h2 className='font-bold text-slate-400'>${transaction.amount}</h2>
                </div>
            )
        })}
    </>
  )
}

export default TransactionList