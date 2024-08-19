import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://glowquester-backend.vercel.app/skincare/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, phoneno }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();

      if (response.status === 201) {
        setSuccess(data);
        setError('');
        navigate('/sign-in'); // Redirect to sign-in page on success
      } else {
        setError(data);
        setSuccess('');
      }
    } catch (error) {
      setError(error.message);
      setSuccess('');
    }
  };

  return (
    <div className="signuppage">
      <form id="signupForm" onSubmit={handleSubmit}>
        <h4>Sign Up</h4>
        <p>We will use this information to contact you regarding order confirmations</p>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="usernameImp"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="emailImp"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="passwordImp"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            id="phonenoImp"
            className="form-control"
            placeholder="Phone Number"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Sign up</button>
        <br />
        <Link className="signup" to="/sign-in" style={{ fontSize: '1rem' }}>Already have an account? Log in</Link>
      </form>
    </div>
  );
};

export default SignUpPage;
