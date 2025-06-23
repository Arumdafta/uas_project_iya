"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DetailProduk() {
  const { id } = useParams();
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProduk() {
      try {
        const res = await fetch(`/api/produk/${id}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setProduk(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchProduk();
  }, [id]);

  if (loading) return <p style={{ padding: 40 }}>Loading...</p>;
  if (error || !produk) return <p style={{ padding: 40 }}>Produk tidak ditemukan 😢</p>;

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <img
        src={produk.image}
        alt={produk.name}
        style={{
          width: "100%",
          borderRadius: 20,
          marginBottom: 20,
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
        }}
      />
      <h1 style={{ color: "#d6336c" }}>{produk.name}</h1>
      <p style={{ fontSize: 18, marginBottom: 12 }}>{produk.description}</p>
      <p style={{ fontWeight: 700, fontSize: 20, color: "#f783ac" }}>
        Rp{produk.price.toLocaleString()}
      </p>

      <button
        onClick={() => history.back()}
        style={{
          marginTop: 24,
          background: "#ff5c8d",
          color: "white",
          padding: "8px 16px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Kembali
      </button>
    </div>
  );
}
