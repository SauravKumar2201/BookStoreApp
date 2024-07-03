import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About"; // Import the About component
import ContactUs from './components/ContactUs';
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Navbar /> {/* Include Navbar component */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;