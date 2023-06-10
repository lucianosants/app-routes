import { ProductType } from '@/@types/products';
import { link } from '@/config/variables';

export async function getProducts() {
	const response: ProductType[] = await fetch(`${link}/products`).then(
		(response) => {
			return response.json();
		}
	);

	return response;
}
