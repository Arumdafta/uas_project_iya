"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const handleQuantityChange = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQty);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Keranjang kamu kosong 🛒</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ color: "#d6336c", marginBottom: "32px" }}>
        Keranjang Belanja
      </h1>

      {cartItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            background: "#fff0f4",
            padding: "16px",
            borderRadius: "14px",
            boxShadow: "0 4px 12px rgba(255, 92, 141, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />

            <div>
              <h3 style={{ margin: 0 }}>{item.name}</h3>
              <p style={{ margin: "4px 0", color: "#f783ac" }}>
                Rp{item.price.toLocaleString()}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  style={{
                    padding: "6px 14px",
                    backgroundColor: "#ff5c8d",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  -
                </button>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  style={{
                    padding: "6px 14px",
                    backgroundColor: "#ff5c8d",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "#ff3a6e",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Hapus
          </button>
        </div>
      ))}

      <div style={{ textAlign: "right", marginTop: "30px" }}>
        <h2>Total: Rp{total.toLocaleString()}</h2>
        <button
          onClick={() => router.push("/pembayaran")}
          style={{
            padding: "12px 20px",
            background: "#ff5c8d",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}
