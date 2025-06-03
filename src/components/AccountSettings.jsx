import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("popxUser");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      setUser(null);
    }
  }, []);

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <h2>No user found</h2>
        <button
          onClick={() => navigate("/login")}
          style={{
            marginTop: 16,
            padding: "10px 24px",
            borderRadius: 6,
            background: "#7749F8",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        padding: 0,
        maxWidth: 400,
        margin: "40px auto",
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        border: "1px solid #eee",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #eee",
          padding: "18px 18px 12px 18px",
          fontWeight: 600,
          fontSize: 18,
          color: "#232323",
        }}
      >
        Account Settings
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          padding: 18,
        }}
      >
        <img
          src="../../images/Account_logo.png"
          alt="avatar"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#232323" }}>
            {user.fullName}
          </div>
          <div style={{ color: "#888", fontSize: 14, marginBottom: 6 }}>
            {user.email}
          </div>
          <div style={{ color: "#232323", fontSize: 13, lineHeight: 1.5 }}>
            {user.company ? `Company: ${user.company}. ` : ""}
            {user.agency
              ? `Agency: ${user.agency === "yes" ? "Yes" : "No"}. `
              : ""}
            Welcome to your account settings, {user.fullName}!
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          borderTop: "1px dashed #ddd",
          margin: "0 18px",
          marginTop: 8,
        }}
      ></div>
    </div>
  );
};

export default AccountSettings;
