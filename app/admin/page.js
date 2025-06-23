"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import productsData from "@/data/products";
import { useState } from "react";

export default function AdminPage() {
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    if (!user || !isAdmin) {
      router.replace("/"); // redirect non-admin
    }
  }, [user, isAdmin, router]);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    alert("Edit produk ID: " + id);
    // bisa arahkan ke /admin/edit/[id]
  };

  const handleAdd = () => {
    alert("Tambah produk baru");
    // bisa arahkan ke /admin/tambah
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Halaman Admin - Manajemen Produk</h1>
      <button
        onClick={handleAdd}
        style={{
          marginBottom: "20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Tambah Produk
      </button>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff0f4",
            padding: "16px",
            borderRadius: "10px",
            marginBottom: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: 60,
                height: 60,
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            />
            <div>
              <h3>{product.name}</h3>
              <p>Rp{product.price.toLocaleString()}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => handleEdit(product.id)}
              style={{
                backgroundColor: "#ffc107",
                color: "black",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
