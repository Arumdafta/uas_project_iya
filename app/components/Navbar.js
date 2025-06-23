"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => router.push("/")}>
          💄 Make.uFlow
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link className="nav-link" href="/">Home</Link>

          {!user && (
            <>
              <Link className="nav-link" href="/login">Login</Link>
              <Link className="nav-link" href="/signup">Sign Up</Link>
            </>
          )}

          {user && (
            <>
              {/* 🔒 Cek role admin */}
              {user.role === "admin" ? (
                <Link className="nav-link" href="/admin">Admin Dashboard</Link>
              ) : (
                <Link className="nav-link" href="/dashboard">Dashboard</Link>
              )}

              <Link className="nav-link" href="/cart">
                Keranjang {cartCount > 0 && `(${cartCount})`}
              </Link>
              <Link className="nav-link" href="/pembayaran">Pembayaran</Link>
              <Link className="nav-link" href="/contact">Contact</Link>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </nav>
  );
}
