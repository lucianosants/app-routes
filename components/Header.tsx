import Link from 'next/link';

export default function Header() {
	return (
		<header className="flex items-center justify-center w-full px-2 py-6 bg-zinc-600">
			<h1 className="font-bold text-indigo-300">
				<Link href="/">App Routes</Link>
			</h1>
		</header>
	);
}
