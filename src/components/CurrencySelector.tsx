import { useCurrencyStore } from "@/store/currency";

export default function CurrencySelector() {
	const setCurrency = useCurrencyStore((state) => state.setCurrency);

	const handleCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		event.preventDefault();
		setCurrency(event.target.value);
	};

	return (
		<select onChange={handleCurrencyChange}>
			<option value="INR">India (INR)</option>
			<option value="USD">United States (USD)</option>
			<option value="EUR">Europe (EUR)</option>
		</select>
	);
}
