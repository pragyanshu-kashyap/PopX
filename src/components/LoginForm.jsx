import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setLoginError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Simulate login: check localStorage
      const user = JSON.parse(localStorage.getItem("popxUser"));
      if (
        user &&
        user.email === form.email &&
        user.password === form.password
      ) {
        navigate("/account");
      } else {
        setLoginError("Invalid email or password");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        padding: 32,
        maxWidth: 350,
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 4,
          color: "#232323",
        }}
      >
        Signin to your PopX account
      </h2>
      <p style={{ color: "#888", marginBottom: 12, fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>
      {loginError && (
        <span style={{ color: "red", fontSize: 13, marginTop: 4 }}>
          {loginError}
        </span>
      )}
      <button
        type="submit"
        style={{
          width: "100%",
          background: "#D9D9D9",
          color: "#232323",
          border: "none",
          borderRadius: 6,
          padding: "14px 0",
          fontWeight: 600,
          fontSize: 16,
          marginTop: 16,
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
};

const inputStyle = {
  border: "1px solid #E5E5E5",
  borderRadius: 6,
  padding: "12px 10px",
  fontSize: 15,
  fontWeight: 500,
  color: "#232323",
  background: "#F7F8FD",
  outline: "none",
};
const labelStyle = { fontWeight: 500, color: "#7749F8", fontSize: 14 };
const errorStyle = { color: "red", fontSize: 12, marginTop: 2 };

export default LoginForm;
