import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use the useNavigate hook here

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                // Registration successful, you may want to redirect the user to the login page
                navigate('/login');
            } else {
                const data = await response.json(); // Parse response body as JSON
                console.error('Registration failed:', data);
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    };

    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Register;
