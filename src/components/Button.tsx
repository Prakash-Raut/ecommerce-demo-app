export default function PrimaryButton({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<button
			type="button"
			className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
		>
			{children}
		</button>
	);
}
