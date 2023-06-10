import Link from 'next/link';
import { ProductType } from '@/@types/products';

type Props = ProductType & {
	isLink: boolean;
};

export function ProductCard({ isLink, ...props }: Props) {
	const { id, name, description, price } = { ...props };

	return (
		<Link
			className="w-full p-3 h-fit rounded-xl bg-zinc-400 md:w-80 lg:w-72"
			href={isLink ? `/products/${id}` : '#'}
		>
			<h4 className="p-2 text-lg font-semibold text-white bg-indigo-500 rounded-lg w-fit">
				{name}
			</h4>

			<p className="my-2">{description}</p>

			<p className="font-medium text-md">R$ {price.toFixed(2)}</p>
		</Link>
	);
}
