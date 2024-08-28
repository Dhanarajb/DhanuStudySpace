import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Login from "./Login";
import Logout from "./Logout";
import DSA from "./DSA";
import ProblemList from "./ProblemList";
import ProblemDetail from "./ProblemDetail";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Sidebar />
      <main
        style={{
          marginLeft: "210px",
          padding: "20px",
          marginTop: "60px",
          marginBottom: "25px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/logout"
            element={
              isLoggedIn ? (
                <Logout onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/dsa/*"
            element={<PrivateRoute element={<DSA />} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/dsa/:topic"
            element={
              <PrivateRoute element={<ProblemList />} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/dsa/:topic/:problemTitle"
            element={
              <PrivateRoute
                element={<ProblemDetail />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
