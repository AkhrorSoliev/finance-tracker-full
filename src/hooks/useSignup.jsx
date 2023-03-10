import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from './useAuthContext'

function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useAuthContext()
  const signup = async (displayName, email, password) => {
    setIsPending(true);
    try {
      const ref = await createUserWithEmailAndPassword(auth, email, password);

      if (!ref) {
        throw new Error("Could not signup 😢");
      }

      await updateProfile(auth.currentUser, { displayName });
      dispatch({type: "SIGNIN", payload: ref.user})
      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
      console.log(err.message);
    }
  };

  return { error, isPending, signup };
}

export { useSignup };
