import type { MetaFunction } from "react-router";
import type { Route } from "./+types/submit-page";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: "Submit Product | wemake" },
		{ name: "description", content: "Submit a new product" },
	];
}

export function loader({}: Route.LoaderArgs) {
	return {};
}

export function action({}: Route.ActionArgs) {
	return {};
}

export default function SubmitPage() {
	return (
		<div>
			<h1>Submit Product</h1>
		</div>
	);
}

