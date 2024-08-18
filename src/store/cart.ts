import { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends Product {
	quantity: number;
}

interface CartState {
	cart: CartItem[];
	subTotal: number;
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	updateQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
	totalAmount: () => void;
}

export const useCartStore = create<CartState>()(
	persist(
		(set) => ({
			cart: [],
			subTotal: 0,
			addToCart: (product) =>
				set((state) => {
					const existingProduct = state.cart.find(
						(item) => item.id === product.id
					);
					if (existingProduct) {
						return {
							cart: state.cart.map((item) =>
								item.id === product.id
									? { ...item, quantity: item.quantity + 1 }
									: item
							),
						};
					} else {
						return {
							cart: [...state.cart, { ...product, quantity: 1 }],
						};
					}
				}),
			removeFromCart: (id) => {
				set((state) => ({
					cart: state.cart.filter((item) => item.id !== id),
				}));
			},
			updateQuantity: (id, quantity) => {
				set((state) => ({
					cart: state.cart.map((item) =>
						item.id === id ? { ...item, quantity } : item
					),
				}));
			},
			clearCart: () => {
				set(() => ({ cart: [] }));
			},
			totalAmount: () => {
				set((state) => {
					const subTotal = state.cart.reduce(
						(acc, item) => acc + item.price * item.quantity,
						0
					);
					return { subTotal };
				});
			},
		}),
		{
			name: "cart-storage",
			partialize: (state) => ({
				cart: state.cart,
				subTotal: state.subTotal,
			}), // Persist only cart and subTotal
		}
	)
);
