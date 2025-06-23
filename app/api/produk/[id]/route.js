import products from "@/data/products.json";

export async function GET(request, { params }) {
  const { id } = params;
  const item = products.find((p) => p.id === id);

  if (!item) {
    return new Response(JSON.stringify({ message: "Produk tidak ditemukan" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
