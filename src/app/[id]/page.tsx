"use client";

import { axiosInstance } from "@/lib/axiosInstance";
import { useCartStore } from "@/store/cart";
import { Product } from "@/types/Product";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export default function ProductPage({ params }: { params: { id: number } }) {
	const [product, setProduct] = useState<Product>();

	const fetchProducts = async () => {
		try {
			const response = await axiosInstance.get<Product>(
				`/products/${params.id}`
			);
			if (response.data) {
				setProduct(response.data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	const addToCart = useCartStore((state) => state.addToCart);

	const handleAddToCart = () => {
		if (product) {
			addToCart(product);
			toast.success(`${product.title} added to cart`);
		}
	};

	const formattedPrice = useMemo(() => {
		if (product) {
			return new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "INR",
			}).format(product.price);
		}
		return "";
	}, [product]);

	return (
		<section className="py-8 bg-white md:py-16 antialiased">
			<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
					<div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
						<img
							className="w-full h-96 object-contain"
							src={product?.image}
							alt={product?.title}
						/>
					</div>

					<div className="mt-6 sm:mt-8 lg:mt-0">
						<h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
							{product?.title}
						</h1>
						<div className="mt-4 sm:items-center sm:gap-4 sm:flex">
							<p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								{formattedPrice}
							</p>

							<div className="flex items-center gap-2 mt-2 sm:mt-0">
								<span className="inline-flex justify-between items-center px-2 py-1 me-2 text-sm font-medium text-white bg-green-900 rounded">
									<p className="text-sm font-medium leading-none text-white">
										{product?.rating.rate}{" "}
									</p>
									<Star
										size={16}
										className="ml-2"
									/>
								</span>
								<Link
									href="#"
									className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
								>
									{product?.rating.count} Reviews
								</Link>
							</div>
						</div>

						<div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
							<button
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={handleAddToCart}
							>
								<ShoppingCart className="mr-3" />
								ADD TO CART
							</button>
						</div>

						<hr className="my-6 md:my-8 border-gray-200" />

						<p className="mb-6 text-gray-500">
							{product?.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
