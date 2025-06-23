"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1 style={{ fontSize: "32px", color: "#d6336c" }}>🎉 Pembayaran Berhasil!</h1>
      <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
        Terima kasih telah berbelanja di Make.uFlow. Pesanan kamu sedang diproses.
      </p>
      <Link href="/" style={{ marginTop: "30px", display: "inline-block", color: "#ff5c8d", fontWeight: 600 }}>
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
