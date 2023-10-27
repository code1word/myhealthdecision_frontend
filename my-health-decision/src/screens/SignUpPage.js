import React from "react";
import "./SignUpPage.css";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [email_confirmation, setEmailConfirmation] = useState("");
  const handleEmailConfirmationChange = (e) => {
    setEmailConfirmation(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="signup_page_outer_container">
      <div className="signup_page_heading">Create an account</div>
      <div className="signup_page_subheading">Already have one? Sign in.</div>
      <div className="signup_page_field_heading">Enter your email</div>
      <input
        className="signup_page_field"
        type="email"
        placeholder=""
        value={email}
        onChange={handleEmailChange}
      />

      <div className="signup_page_field_heading">Confirm your email</div>
      <input
        className="signup_page_field"
        type="email"
        placeholder=""
        value={email_confirmation}
        onChange={handleEmailConfirmationChange}
      />

      <div className="signup_page_field_heading">Create a password</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="At least 6 characters long"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className="signup_page_field_heading">Your name</div>
      <div style={{ display: "flex", width: "100%" }}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          style={{ marginLeft: "40px", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <div className="signup_page_save_continue">Save and continue</div>
    </div>
  );
}

export default SignUpPage;
