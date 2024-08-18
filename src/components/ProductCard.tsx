import { useCartStore } from "@/store/cart";
import { Product } from "@/types/Product";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Price from "./Price";

export default function ProductCard({
	id,
	image,
	title,
	price,
	category,
	description,
	rating,
}: Product) {
	const addToCart = useCartStore((state) => state.addToCart);

	const handleAddToCart = () => {
		addToCart({ id, image, title, price, category, description, rating });
		toast.success(`${title} added to cart`);
	};

	return (
		<div className="flex flex-col justify-between items-center w-[240px] bg-white shadow-xl rounded-xl p-4">
			<Link href={`/${id}`}>
				<img
					className="cursor-pointer w-full h-48 object-cover object-center"
					src={image}
					alt={title}
				/>
			</Link>
			<div className="flex flex-col justify-start items-start gap-4">
				<p className="font-semibold ">{title}</p>
				<p className="inline-flex items-center px-2 py-1 text-sm font-medium rounded bg-gray-200 text-gray-900">
					{category}
				</p>
				<p className="font-medium">
					<Price price={price} />
				</p>
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					onClick={handleAddToCart}
				>
					<ShoppingCart className="mr-3" />
					ADD TO CART
				</button>
			</div>
		</div>
	);
}
