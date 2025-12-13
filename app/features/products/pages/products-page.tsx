import type { MetaFunction } from "react-router";
import type { Route } from "./+types/products-page";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: "Products | wemake" },
		{ name: "description", content: "Browse all products" },
	];
}

export function loader({}: Route.LoaderArgs) {
	return {};
}

export function action({}: Route.ActionArgs) {
	return {};
}

export default function ProductsPage() {
	return (
		<div>
			<h1>Products</h1>
		</div>
	);
}

