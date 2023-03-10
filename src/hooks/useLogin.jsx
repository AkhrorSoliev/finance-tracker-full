import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from './useAuthContext'

function useLogin() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext()
  const login = async (email, password) => {
    setIsPending(true);
    try {
      const ref = await signInWithEmailAndPassword(auth, email, password);

      if (!ref) {
        throw new Error("Could not login 😢");
      }

      dispatch({type: "SIGNIN", payload: ref.user})
      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
      console.log(err.message);
    }
  };

  return { error, isPending, login };
}

export { useLogin };
