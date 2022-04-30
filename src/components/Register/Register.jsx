import React from 'react';

function Register() {
  return (
    <section className="registration">

      <div className="formRegister">
        <h1>User Register</h1>
        <form>
          <input className="name" placeholder="Name..." />
          <input className="lastName" placeholder="Last name..." />
          <input className="userName" placeholder="User name..." />
          <input className="email" placeholder="Email..." />
          <input className="birthDate" placeholder="Date of Birth..." />
          <input className="password" placeholder="Choose Password..." />
          <input className="repeatPassword" placeholder="Repeat Password..." />
          <input className="image" placeholder="Profile Picture..." />
          <div>
            <button type="submit">Register!</button>
          </div>
        </form>
      </div>
    </section>
  );
}

module.exports = Register;

{ /* <Route path="/register" element={<Register />} /> */ }
