"use client";

import { useCartStore } from "@/store/cart";
import { Heart, Minus, Plus, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Price from "./Price";

export default function ProductCardInCartX({
	id,
	title,
	price,
	image,
	quantity,
	description,
	category,
	rating,
}: {
	id: number;
	title: string;
	price: number;
	image: string;
	quantity: number;
	description: string;
	category: string;
	rating: { rate: number; count: number };
}) {
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const updateQuantity = useCartStore((state) => state.updateQuantity);

	const removeItemFromCart = (id: number) => {
		// Remove item from cart
		removeFromCart(id);
		toast.error(`${title} removed from cart`);
	};

	return (
		<div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
			<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
				<a
					href="#"
					className="shrink-0 md:order-1"
				>
					<img
						className="h-20 w-20"
						src={image}
						alt={title}
					/>
				</a>

				<label
					htmlFor="counter-input"
					className="sr-only"
				>
					Choose quantity:
				</label>
				<div className="flex items-center justify-between md:order-3 md:justify-end">
					<div className="flex items-center">
						<button
							type="button"
							id="decrement-button"
							data-input-counter-decrement="counter-input"
							className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
							onClick={() => updateQuantity(id, quantity - 1)}
							disabled={quantity === 1}
						>
							<Minus size={20} />
						</button>
						<input
							type="text"
							id="counter-input"
							data-input-counter
							className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
							placeholder=""
							value={quantity}
							required
						/>
						<button
							type="button"
							id="increment-button"
							data-input-counter-increment="counter-input"
							className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
							onClick={() => updateQuantity(id, quantity + 1)}
						>
							<Plus size={20} />
						</button>
					</div>
					<div className="text-end md:order-4 md:w-32">
						<p className="text-base font-bold text-gray-900">
							<Price price={price} />
						</p>
					</div>
				</div>

				<div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
					<Link
						href={`/${id}`}
						className="text-base font-medium text-gray-900 hover:underline"
					>
						{title}
					</Link>

					<div className="flex items-center gap-4">
						<button
							type="button"
							className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
						>
							<Heart />
							Add to Favorites
						</button>

						<button
							type="button"
							className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
							onClick={() => removeItemFromCart(id)}
						>
							<X />
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
