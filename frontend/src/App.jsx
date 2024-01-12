import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage";
import Register from "./components/Pages/Register";
import './App.css';

function App() {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:8000/', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            
                        },
                        credentials: 'include',
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const content = await response.json();
                    setName(content.name);
                } catch (error) {
                    console.error('Error fetching user data:', error.message);
                    // Handle the error or redirect the user to a login page, etc.
                }
            }
        )();
    }, []); // Add an empty dependency array to useEffect

    return (
        <div className="App">
            <BrowserRouter>
                <Nav name={name} setName={setName} />

                <main className="form-signin">
                    <Routes>
                        <Route path="/" element={<Home name={name} />} />
                        <Route path="/login" element={<Login setName={setName} />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;



