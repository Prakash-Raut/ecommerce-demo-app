"use client";

import ProductCard from "@/components/ProductCard";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import Link from "next/link";

export default function Home() {
	const products = useFetchProducts();

	return (
		<>
			<div className="flex justify-center items-center gap-10 p-3 border-b">
				<Link
					href="/products"
					className="font-medium text-gray-700 hover:text-gray-800"
				>
					All Categories
				</Link>
				<Link
					href="/products"
					className="font-medium text-gray-700 hover:text-gray-800"
				>
					Best Sellers
				</Link>
				<Link
					href="/products"
					className="font-medium text-gray-700 hover:text-gray-800"
				>
					Today&apos;s Deals
				</Link>
				<Link
					href="/products"
					className="font-medium text-gray-700 hover:text-gray-800"
				>
					New Releases
				</Link>
				<Link
					href="/products"
					className="font-medium text-gray-700 hover:text-gray-800"
				>
					Gift Ideas
				</Link>
				<Link
					href="/products"
					className="font-medium text-gray-700 hover:text-gray-800"
				>
					More
				</Link>
			</div>
			<main className="flex min-h-screen flex-col items-center justify-between p-12">
				<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
				</section>
			</main>
		</>
	);
}
