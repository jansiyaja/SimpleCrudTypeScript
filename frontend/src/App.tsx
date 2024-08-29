// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./assets/Pages/LoginPage";
import RegisterPage from "./assets/Pages/RegisterPage";
import HomePage from "./assets/Pages/HomePage";
import Navbar from "./assets/Components/NavBar";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
