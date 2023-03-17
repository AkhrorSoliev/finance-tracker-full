import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHFL10kd5mHhUnfZ7KD4aigbTKwFFnUYE",
  authDomain: "finance-tracer.firebaseapp.com",
  projectId: "finance-tracer",
  storageBucket: "finance-tracer.appspot.com",
  messagingSenderId: "121082850158",
  appId: "1:121082850158:web:8d36e87797932b6bb52f7f",
};

// init firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const projectFirestore = getFirestore(app)


export { auth , projectFirestore}
