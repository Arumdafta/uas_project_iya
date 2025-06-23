"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProdukPage() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    async function fetchProduk() {
      const res = await fetch("/api/produk");
      const data = await res.json();
      setProduk(data);
    }

    fetchProduk();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#d6336c" }}>Daftar Produk</h1>
      <div className="products-grid">
        {produk.map((item) => (
          <Link key={item.id} href={`/produk/${item.id}`} className="product-card">
            <img src={item.gambar} alt={item.nama} className="product-image" />
            <div className="product-name">{item.nama}</div>
            <div className="product-price">Rp {item.harga.toLocaleString()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
