import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleLogin = () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            if (storedUserData.username === username && storedUserData.password === password) {
                alert('Login successful!');
                navigate('/products')
                // Redirect to the products page (add your redirect logic here)
            } else {
                alert('Invalid username or password.');
            }
        } else {
            alert('No user found. Please sign up first.');
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login Page</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
