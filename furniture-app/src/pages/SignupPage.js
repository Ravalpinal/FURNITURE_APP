import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
    

    const handleSignup = () => {
        if (username && password && confirmPassword) {
            if (password === confirmPassword) {
                const userData = { username, password };
                localStorage.setItem('userData', JSON.stringify(userData));
                alert('Signup successful! Please log in.');
                navigate('/products')

                // Redirect to login page if necessary

            } else {
                alert('Passwords do not match.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Signup Page</h2>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    );
};

export default SignupPage;
