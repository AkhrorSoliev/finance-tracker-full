import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useContext() must be use in AuthContextProvider")
  }

  return context
}

export { useAuthContext }