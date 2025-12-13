import type { MetaFunction } from "react-router";
import type { Route } from "./+types/category-page";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: `Category ${params.category} | wemake` },
		{ name: "description", content: `Products in category ${params.category}` },
	];
}

export function loader({ params }: Route.LoaderArgs) {
	return {
		category: params.category,
	};
}

export function action({ params }: Route.ActionArgs) {
	return {};
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<h1>Category: {loaderData.category}</h1>
		</div>
	);
}

