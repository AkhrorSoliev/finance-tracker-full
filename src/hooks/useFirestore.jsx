import { useReducer } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: action.payload,
        success: null,
        error: null,
      };
    default:
      return state;
  }
};

export function useFirestore(collect) {
  const [response, dispatch] = useReducer(firestreReducer, initialState);

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addedDoc = await addDoc(collection(projectFirestore, collect), {
        ...doc,
        createdAt,
      });
      console.log("GO", addedDoc)
      dispatch({ type: "ADDED_DOCUMENT", payload: addedDoc });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = (id) => {};

  return { addDocument, response };
}
