"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Dialog open={isCartOpen} onClose={() => setIsCartOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl">
              <div className="flex h-full flex-col overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <DialogTitle className="text-lg font-medium text-gray-900">Carrito de compras</DialogTitle>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                    aria-label="Cerrar carrito"
                  >
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-8 flow-root flex-grow">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Tu carrito está vacío.</p>
                  ) : (
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex py-6">
                          <div className="w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.imageSrc ?? "/pasto.jpg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p>${item.price.toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Cantidad: {item.quantity}</p>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Envío y impuestos calculados al pagar.</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continuar comprando &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
