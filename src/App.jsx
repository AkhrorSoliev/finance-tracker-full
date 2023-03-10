import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// components
import Navbar from "./components/Navbar";
import {Protected, ProtectedHome} from "./components/Protected";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authReady , user } = useAuthContext();
  return (
    <div className="font-roboto text-xl">
      {authReady && (
        <Router>
          <Navbar />
          <div className="max-w-5xl mx-auto px-5">
            <Routes>
              <Route path="/" element={
                <ProtectedHome isSignedIn={user}>
                  <Home />
                </ProtectedHome>
              } />
              <Route path="/login" element={
                <Protected isSignedIn={user}>
                  <Login />
                </Protected>
              } />
              <Route path="/signup" element={
                <Protected isSignedIn={user}>
                  <Signup />
                </Protected>
              } />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
