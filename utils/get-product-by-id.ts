import { ProductType } from '@/@types/products';
import { link } from '@/config/variables';

async function getProductById(id: string) {
	const { name, price, description }: ProductType = await fetch(
		`${link}/products/${id}`
	).then((res) => res.json());

	return { name, price, description };
}

export { getProductById };
