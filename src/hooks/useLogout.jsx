import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from './useAuthContext'

function useLogout() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext()
  const logout = async () => {
    setIsPending(true);
    try {

      await signOut(auth)
        
      dispatch({type: "LOGOUT"})

      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
      console.log(err.message);
    }
  };

  return { error, isPending, logout };
}

export { useLogout };
