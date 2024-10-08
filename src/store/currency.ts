import { create } from "zustand";

interface CurrencyState {
	currency: string;
	setCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
	currency: "INR",
	setCurrency: (currency) => set({ currency }),
}));
