import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100vh",
        minWidth: 320,
        background: "#fafbfc",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        padding: "0 0 32px 0",
      }}
    >
      <div style={{ marginBottom: "auto" }}></div>
      <div style={{ padding: "0 32px" }}>
        <h2
          style={{
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 8,
            color: "#232323",
          }}
        >
          Welcome to PopX
        </h2>
        <p style={{ color: "#888", marginBottom: 32 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          style={{
            width: "100%",
            background: "#7749F8",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "14px 0",
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 12,
            cursor: "pointer",
          }}
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
        <button
          style={{
            width: "100%",
            background: "#F7F8FD",
            color: "#7749F8",
            border: "none",
            borderRadius: 6,
            padding: "14px 0",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
