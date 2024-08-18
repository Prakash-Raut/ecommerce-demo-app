"use client";

import CartSummary from "@/components/CartSummary";
import ProductCardInCartX from "@/components/ProductCardInCartX";

import { useCartStore } from "@/store/cart";

export default function ViewCart() {
	const cart = useCartStore((state) => state.cart);

	return (
		<div className="container mx-auto max-w-screen-xl px-4 2xl:px-0 py-8 md-py-16">
			<h2 className="text-xl font-semibold text-gray-900 sm:text-3xl">
				Shopping Cart
			</h2>
			<div className="flex justify-center items-start m-2 p-10 gap-5">
				<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
					<div className="border h-full max-w-xl shadow-lg p-10 rounded-lg mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">
						{cart.length === 0 ? (
							<h1 className="text-center text-5xl font-medium">
								Your Cart is empty
							</h1>
						) : (
							cart.map((product) => (
								<ProductCardInCartX
									key={product.id}
									{...product}
								/>
							))
						)}
					</div>
				</div>
				<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
					<CartSummary />
				</div>
			</div>
		</div>
	);
}
