'use client'

import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export default function ProductSection() {
  const { addToCart } = useCart();

  const product = {
    id: "pasto-001",
    name: "Pasto sintético",
    price: 29.99,
    quantity: 1,
    imageSrc: "/pasto.jpg",
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Producto agregado al carrito");
  };
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Compra nuestro <span className="text-green-600">producto estrella</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Aumenta tu bienestar con nuestros productos seleccionados.
        </p>
        <div className="flex justify-center">
          <img
            src="/pasto.jpg"
            alt="Producto"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-2xl font-bold text-green-700 mt-6">$29.99</p>

        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}
