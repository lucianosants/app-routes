import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/utils/get-products';

export default async function ProductsPage() {
	const products = await getProducts();

	return (
		<div className="flex flex-col flex-1 gap-3 md:flex-row">
			{products.map((product) => {
				const { id, name, description, price } = product;

				return (
					<ProductCard
						key={id}
						isLink
						id={id}
						name={name}
						description={description}
						price={price}
					/>
				);
			})}
		</div>
	);
}
