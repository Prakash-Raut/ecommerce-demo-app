import { axiosInstance } from "@/lib/axiosInstance";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

export const useFetchProducts = (): Product[] => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axiosInstance.get<Product[]>(
					"/products"
				);
				setProducts(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProducts();
	}, []);

	return products;
};
