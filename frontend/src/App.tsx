// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./assets/Pages/LoginPage";
import RegisterPage from "./assets/Pages/RegisterPage";
import HomePage from "./assets/Pages/HomePage";
import Navbar from "./assets/Components/NavBar";
import { UserProvider } from "./assets/Components/userContext";

const App: React.FC = () => {
    return (
        <UserProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
        </UserProvider>
    );
};

export default App;
