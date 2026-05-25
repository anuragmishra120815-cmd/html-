import React, { useState } from 'react';
import './App.css'; // This links your separate CSS file below

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setUser({ name, email });
    setIsSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="outer-border-box">
        <div className="inner-card">
          <h2 className="form-title">Registration Form</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="input-field-group">
              <input 
                type="text" 
                placeholder="Enter Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            
            <div className="input-field-group">
              <input 
                type="email" 
                placeholder="Enter Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            
            <div className="input-field-group">
              <input 
                type="password" 
                placeholder="Enter Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            
            <button type="submit" className="submit-green-btn">Register</button>
          </form>

          {isSubmitted && (
            <div className="success-block">
              <p className="success-status-text">Registration Successful!</p>
              <div className="registered-display-box">
                <h4 className="display-box-heading">Registered Users</h4>
                <ul className="display-list">
                  <li><strong>{user.name}</strong> - {user.email}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;