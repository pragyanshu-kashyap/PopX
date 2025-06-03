import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    if (!form.agency) errs.agency = "Please select an option";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Simulate registration: store in localStorage
      localStorage.setItem("popxUser", JSON.stringify(form));
      navigate("/account");
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
          marginBottom: 8,
          color: "#232323",
        }}
      >
        Create your PopX account
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>
          Full Name<span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="fullName"
          type="text"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>
          Phone number<span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="phone"
          type="text"
          placeholder="1234567890"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>
          Email address<span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="marry@gmail.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>
          Password<span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>Company name</label>
        <input
          name="company"
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={{ margin: "12px 0 0 0" }}>
        <label
          style={{
            fontWeight: 500,
            color: "#232323",
            fontSize: 14,
            marginBottom: 8,
            display: "block",
          }}
        >
          Are you an Agency?<span style={{ color: "red" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === "yes"}
              onChange={handleChange}
              style={{ accentColor: "#7749F8", width: 18, height: 18 }}
            />
            Yes
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === "no"}
              onChange={handleChange}
              style={{ accentColor: "#7749F8", width: 18, height: 18 }}
            />
            No
          </label>
        </div>
        {errors.agency && <span style={errorStyle}>{errors.agency}</span>}
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          background: "#7749F8",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "14px 0",
          fontWeight: 600,
          fontSize: 16,
          marginTop: 24,
          cursor: "pointer",
        }}
      >
        Create Account
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

export default CreateAccountForm;
