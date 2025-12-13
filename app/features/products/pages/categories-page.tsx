import type { MetaFunction } from "react-router";
import type { Route } from "./+types/categories-page";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: "Categories | wemake" },
		{ name: "description", content: "Product categories" },
	];
}

export function loader({}: Route.LoaderArgs) {
	return {};
}

export function action({}: Route.ActionArgs) {
	return {};
}

export default function CategoriesPage() {
	return (
		<div>
			<h1>Categories</h1>
		</div>
	);
}

