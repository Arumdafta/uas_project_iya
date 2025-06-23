"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { user, login, isAdmin } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      if (isAdmin) {
        router.replace("/admin"); // arahkan admin ke /admin
      } else {
        router.replace("/"); // user biasa ke home
      }
    }
  }, [user, isAdmin, router]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(form.username, form.password);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className="container" style={{ padding: "40px" }}>
      <h1 style={{ color: "#d6336c", marginBottom: "20px" }}>Login Make.uFlow</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          autoFocus
          style={inputStyle}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Masuk
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <p style={{ marginTop: 20 }}>
        Belum punya akun? <a href="/signup" style={{ color: "#d6336c" }}>Daftar di sini</a>
      </p>
    </div>
  );
}

// Style inline opsional
const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ffb3c6",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#ff5c8d",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
};
