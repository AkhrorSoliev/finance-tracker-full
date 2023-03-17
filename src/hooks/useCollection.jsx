import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

function useCollection(collect) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(projectFirestore, collect),
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        // update states
        setDocuments(result);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe()
  }, [collect]);


  return {documents, error}
}

export { useCollection };
