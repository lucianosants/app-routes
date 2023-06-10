import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/utils/get-products';
import { getProductById } from '@/utils/get-product-by-id';

export async function generateStaticParams() {
	const products = await getProducts();

	return products.map((product) => ({
		id: String(product.id),
	}));
}

export default async function ProductPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;

	const { name, description, price } = await getProductById(id);

	return (
		<ProductCard
			isLink={false}
			name={name}
			description={description}
			price={price}
		/>
	);
}
