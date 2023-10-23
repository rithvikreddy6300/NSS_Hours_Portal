import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
          />
          <Route
            path="/about"
            element={isAuthenticated ? <About /> : <Navigate to="/signin" />}
          />
          <Route
            path="/events"
            element={isAuthenticated ? <Events /> : <Navigate to="/signin" />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
