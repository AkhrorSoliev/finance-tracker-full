import TransactionForm from "./TransactionForm"
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from "./TransactionList"

function Home() {
  const { user } = useAuthContext()
  const { documents, error} = useCollection('transactions')
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full">
        {error && <div>{error}</div>}
        {documents && <TransactionList transactions={documents}/>}
      </div>
      <div>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}

export default Home