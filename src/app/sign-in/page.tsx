"use client";

import { axiosInstance } from "@/lib/axiosInstance";
import { useState } from "react";

export default function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const signin = async () => {
		try {
			console.log("Signing in...", username, password);
			const response = await axiosInstance.post("/auth/login", {
				data: {
					username,
					password,
				},
			});

			const data = await response.data();
			console.log(data, "Successfully signed in");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className="flex flex-col my-20 items-center justify-center p-24 max-w-2xl mx-auto gap-10 border-2 rounded-lg shadow-lg">
			<h1 className="text-4xl font-semibold">
				Sign in to your account
			</h1>
			<input
				type="text"
				name="username"
				id="username"
				onChange={(e) => setUsername(e.target.value)}
				value={username}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder="John Doe"
				required
			/>
			<input
				type="password"
				name="password"
				id="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder="•••••••••"
				required
			/>
			<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onSubmit={signin}>
				Sign in
			</button>
		</form>
	);
}
