import type { MetaFunction } from "react-router";
import type { Route } from "./+types/search-page";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: "Search Products | wemake" },
		{ name: "description", content: "Search for products" },
	];
}

export function loader({}: Route.LoaderArgs) {
	return {};
}

export function action({}: Route.ActionArgs) {
	return {};
}

export default function SearchPage() {
	return (
		<div>
			<h1>Search Products</h1>
		</div>
	);
}

