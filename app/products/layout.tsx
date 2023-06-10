import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={inter.style}
			className="flex flex-col h-full gap-4 px-4 py-6 bg-zinc-500"
		>
			<h2 className="font-semibold text-indigo-100">Produtos</h2>
			{children}
		</div>
	);
}
