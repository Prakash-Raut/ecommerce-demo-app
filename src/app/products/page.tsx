"use client";

import ProductCard from "@/components/ProductCard";
import SideBar from "@/components/SideBar";
import { useFetchProducts } from "@/hooks/useFetchProducts";

export default function ProductsPage() {
	const products = useFetchProducts();

	return (
		<div className="container mx-auto flex p-8">
			<aside className="border-r border-t p-2 w-1/6 h-screen">
				<SideBar />
			</aside>
			<main className="pl-4 w-5/6">
				<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
				</section>
			</main>
		</div>
	);
}
