"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Gunakan state untuk dummyUsers (meskipun ini hanya simulasi sementara)
  const [users, setUsers] = useState([
    { id: 1, name: "Admin", username: "admin", password: "admin", role: "admin" },
    { id: 2, name: "User", username: "user", password: "123", role: "user" },
  ]);

  const login = (username, password) => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!found) return { success: false, message: "Username atau password salah" };

    setUser(found);
    return { success: true };
  };

  const logout = () => setUser(null);

  const signup = (form) => {
    const exists = users.some((u) => u.username === form.username);
    if (exists) return { success: false, message: "Username sudah digunakan" };

    const newUser = { ...form, id: Date.now(), role: "user" };
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    return { success: true };
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
