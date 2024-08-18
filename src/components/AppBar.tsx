"use client";

import { useCartStore } from "@/store/cart";
import { Currency, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import CurrencySelector from "./CurrencySelector";

export default function AppBar() {
	const cart = useCartStore((state) => state.cart);
	return (
		<header className="relative bg-white">
			<p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
				Special Discount on Orders Over $200! Get 10% Off with Code:
				SAVE10
			</p>

			<nav
				aria-label="Top"
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
			>
				<div className="border-b border-gray-200">
					<div className="flex h-16 items-center">
						<button
							type="button"
							className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
						>
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open menu</span>
						</button>

						{/* Logo */}
						<div className="ml-4 flex lg:ml-0">
							<Link
								href="/"
								className="flex items-center space-x-3"
							>
								<img
									src="https://flowbite.com/docs/images/logo.svg"
									className="h-8"
									alt="Flowbite Logo"
								/>
								<span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
									ShopCart
								</span>
							</Link>
						</div>

						{/* Search */}
						<div className="flex w-full justify-center items-center">
							<form className="w-full max-w-sm">
								<div className="relative">
									<input
										type="search"
										id="product-search-input"
										className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300"
										placeholder="Search Products, Categories, Brands..."
										required
									/>
									<button
										type="submit"
										className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										<Search />
										<span className="sr-only">Search</span>
									</button>
								</div>
							</form>
						</div>

						<div className="ml-auto flex items-center">
							<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
								<Link
									href="/sign-in"
									className="text-sm font-medium text-gray-700 hover:text-gray-800"
								>
									Sign in
								</Link>
								<span
									aria-hidden="true"
									className="h-6 w-px bg-gray-200"
								/>
							</div>

							<div className="hidden lg:ml-8 lg:flex">
								<Currency />
								<CurrencySelector />
							</div>

							{/* User */}
							<div className="ml-4 flow-root lg:ml-6">
								<div className="flex justify-center items-center">
									<User />
									<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
										Account
									</span>
								</div>
							</div>

							{/* Cart */}
							<div className="ml-4 flow-root lg:ml-6">
								<Link
									href="/view-cart"
									className="group -m-2 flex items-center p-2"
								>
									<ShoppingBag />
									<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
										{cart.length}
									</span>
									<span className="sr-only">
										items in cart, view bag
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
