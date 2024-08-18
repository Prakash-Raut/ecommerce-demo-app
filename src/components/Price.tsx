import { useCurrencyStore } from "@/store/currency";

export default function Price({ price }: { price: number }) {
	const currency = useCurrencyStore((state) => state.currency);

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    }).format(price);

	return <span>{formattedPrice}</span>;
}
