import type { MetaFunction } from "react-router";
import type { Route } from "./+types/promote-page";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: "Promote Product | wemake" },
		{ name: "description", content: "Promote your product" },
	];
}

export function loader({}: Route.LoaderArgs) {
	return {};
}

export function action({}: Route.ActionArgs) {
	return {};
}

export default function PromotePage() {
	return (
		<div>
			<h1>Promote Product</h1>
		</div>
	);
}

