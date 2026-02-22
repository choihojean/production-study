import type { MetaFunction } from "react-router";
import type { Route } from "./+types/search-page";
import z from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";
import { ProductCard } from "../components/product-card";
import { Input } from "~/common/components/ui/input";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = ({ params }) => {
	return [
		{ title: "Search Products | wemake" },
		{ name: "description", content: "Search for products" },
	];
}

const paramSchema = z.object({
	query: z.string().optional().default(""),
	page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const { success, data: parsedData } = paramSchema.safeParse(Object.fromEntries(url.searchParams));
	if (!success) {
		throw new Error("Invalid params");
	}
}

export function action({}: Route.ActionArgs) {
	return {};
}

export default function SearchPage() {
	return (
		<div className="space-y-10">
			<Hero 
				title="Search"
				description="Search for products by title or description"
			/>
			<Form className="flex justify-center max-w-screen-md items-center gap-2 mx-auto">
				<Input type="text" name="query" placeholder="Search for products" className="text-lg" />
				<Button type="submit">Search</Button>
			</Form>
			<div className="space-y-5 w-full max-w-screen-md mx-auto">
				{Array.from({ length: 10 }).map((_, index) => (
					<ProductCard
						key={index}
						id="productId"
						name="Product Name"
						description="This is a description of the product."
						upvotes={120}
						comments={12}
						views={12}
					/>
				))}
			</div>
			<ProductPagination totalPages={10} />
		</div>
	);
}

