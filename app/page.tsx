import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-full h-full gap-16">
			<Link
				href="/products"
				className="px-2 py-3 mt-16 duration-75 bg-indigo-300 rounded hover:scale-125"
			>
				Ver produtos
			</Link>
		</main>
	);
}
