"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PembayaranPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (cartItems.length === 0) {
      // Kalau keranjang kosong, redirect ke /dashboard
      router.push("/dashboard");
    }
  }, [cartItems, router]);

  const handlePembayaran = () => {
    alert("Pembayaran berhasil! Terima kasih 💖");
    clearCart();
    router.push("/dashboard"); // Arahkan kembali ke dashboard
  };

  return (
    <div style={{ padding: "40px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ color: "#d6336c", marginBottom: "24px" }}>Pembayaran</h1>
      <p>Total yang harus dibayar:</p>
      <h2 style={{ color: "#ff5c8d" }}>Rp{total.toLocaleString()}</h2>

      <button
        onClick={handlePembayaran}
        style={{
          padding: "14px 28px",
          marginTop: "32px",
          backgroundColor: "#ff5c8d",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Konfirmasi Pembayaran
      </button>
    </div>
  );
}
