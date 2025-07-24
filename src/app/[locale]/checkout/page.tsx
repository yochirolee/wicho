"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [country, setCountry] = useState("United States");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [zip, setZip] = useState("");

  const countries = ["United States", "China", "Russia", "UK"];

  return (
    <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start w-full space-y-9 max-w-5xl">
        <div className="flex justify-start flex-col items-start space-y-2">
          <button
            onClick={() => window.history.back()}
            className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1"
          >
            <svg
              className="fill-stroke"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.91681 7H11.0835"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91681 7L5.25014 9.33333"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91681 7.00002L5.25014 4.66669"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm leading-none">Back</p>
          </button>
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">Checkout</p>
          
        </div>

        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          {/* Product summary */}
          <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full rounded-lg">
            <div className="flex flex-col justify-start items-start w-full space-y-4">
            
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    
                    <div key={item.id} className="flex items-center space-x-4">
                        <img
                        src={item.imageSrc || "/pasto.jpg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                        />
                        <div>
                        <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
                            {item.name} x{item.quantity}
                        </p>
                        <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        </div>
                    </div>
                    ))}
                </>
              ) : (
                <p className="text-gray-500">No hay productos en el carrito.</p>
              )}
            </div>
          </div>

          {/* Checkout form */}
          <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5 rounded-lg">
            <button
              className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full mb-6"
              onClick={() => alert("Pago con PayPal no implementado")}
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                  fill="currentColor"
                />
                <path
                  d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-base leading-4">Pay with PayPal</p>
            </button>

            <div className="flex flex-row justify-center items-center mb-6">
              <hr className="border w-full" />
              <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">or pay with card</p>
              <hr className="border w-full" />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mb-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label>
            <div className="mt-2 flex flex-col">
              <input
                type="text"
                placeholder="0000 1234 6549 15151"
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>

            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Name on card</label>
            <input
              type="text"
              placeholder="Name on card"
              className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-2"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />

            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Country or region</label>
            <div className="relative mt-2">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-left border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
              >
                {country}
              </button>

              {dropdownOpen && (
                <div className="absolute z-10 w-full bg-gray-50 text-gray-600 flex flex-col">
                  {countries.map((c) => (
                    <div
                      key={c}
                      onClick={() => {
                        setCountry(c);
                        setDropdownOpen(false);
                      }}
                      className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="ZIP"
              className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-4"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />

            <button
              onClick={() => alert("Pago simulado completado")}
              className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
            >
              <p className="text-base leading-4">Pay ${total.toFixed(2)}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
