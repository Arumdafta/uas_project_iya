"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import products from "@/data/products";

export default function DashboardPage() {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div
      style={{
        padding: "48px 36px",
        minHeight: "100vh",
        backgroundColor: "#fff0f6",
        color: "#d6336c",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Dashboard Make.uFlow</h1>
        <p>Selamat datang, {user.name}! 🎀</p>
      </header>

      <section style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2
          style={{
            borderBottom: "2px solid #ffc9d0",
            paddingBottom: 8,
            marginBottom: 32,
          }}
        >
          Produk Tersedia
        </h2>

        <div
          style={{
            display: "flex",
            gap: 28,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff0f4",
                borderRadius: 18,
                padding: 24,
                width: 240,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(214, 51, 108, 0.2)",
                textDecoration: "none",
                cursor: "pointer",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => router.push(`/produk/${item.id}`)}
            >
              {/* IMAGE + OVERLAY */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  if (overlay) overlay.style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  if (overlay) overlay.style.opacity = 0;
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    color: "#d6336c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 16,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  Lihat Deskripsi Produk
                </div>
              </div>

              {/* TEXT + BUTTON */}
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: 18,
                  marginBottom: 8,
                  color: "#d6336c",
                  marginTop: 12,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: 16,
                  color: "#f783ac",
                }}
              >
                Rp{item.price.toLocaleString()}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // biar ga trigger klik produk
                  addToCart(item);
                }}
                style={{
                  marginTop: 10,
                  padding: "8px 16px",
                  backgroundColor: "#ff5c8d",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
