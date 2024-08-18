"use client";

import { useCartStore } from "@/store/cart";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "./Button";
import Price from "./Price";
import PrimaryLink from "./PrimaryLink";

export default function CartSummary() {
	const cart = useCartStore((state) => state.cart);

	const subtotal = useCartStore((state) => state.subTotal);
	const calculateSubtotal = useCartStore((state) => state.totalAmount);

	const [discount, setDiscount] = useState<number>(10);
	const [discountType, setDiscountType] = useState<"fixed" | "percentage">(
		"fixed"
	);

	useEffect(() => {
		calculateSubtotal();
	}, [cart, calculateSubtotal]);

	const handleApplyDiscount = () => {
		if (discountType === "percentage") {
			return subtotal * ((100 - discount) / 100);
		} else {
			return subtotal - discount;
		}
	};

	const total = handleApplyDiscount();

	return (
		<div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
			<div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
				<p className="text-xl font-semibold text-gray-900">
					Order summary
				</p>

				<div className="space-y-4">
					<div className="space-y-2">
						<dl className="flex items-center justify-between gap-4">
							<dt className="text-base font-normal text-gray-500">
								Subtotal
							</dt>
							<dd className="text-base font-medium text-gray-900">
								<Price price={subtotal} />
							</dd>
						</dl>

						<dl className="flex items-center justify-between gap-4">
							<dt className="text-base font-normal text-gray-500">
								Discount
							</dt>
							<dd className="text-base font-medium text-green-600">
								<Price price={discount} />
							</dd>
						</dl>
					</div>

					<dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
						<dt className="text-base font-bold text-gray-900">
							Total Amount
						</dt>
						<dd className="text-base font-bold text-gray-900">
							<Price price={total} />
						</dd>
					</dl>
				</div>
				<div className="flex justify-center items-center">
					<PrimaryLink to="/checkout">
						Proceed to Checkout
					</PrimaryLink>
				</div>

				<div className="flex items-center justify-center gap-2">
					<span className="text-sm font-normal text-gray-500">
						or
					</span>
					<Link
						href="/products"
						title=""
						className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
					>
						Continue Shopping
						<MoveRight />
					</Link>
				</div>
			</div>

			<div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
				<form className="space-y-4">
					<div>
						<label
							htmlFor="voucher"
							className="mb-2 block text-sm font-medium text-gray-900"
						>
							Do you have a voucher or gift card?
						</label>
						<input
							type="text"
							id="voucher"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-50"
							placeholder="SAVE10"
							required
						/>
					</div>
					<div className="flex justify-center items-center">
						<PrimaryButton>Apply Code</PrimaryButton>
					</div>
				</form>
			</div>
		</div>
	);
}
