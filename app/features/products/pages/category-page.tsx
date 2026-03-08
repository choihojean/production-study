
import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: `Developer Tools | wemake` },
		{ name: "description", content: `Tools for developers to build their products` },
	];
}

export default function CategoryPage() {
	return (
		<div className="space-y-10">
			<Hero 
				title={`Developer Tools`}
				description="Tools for developers to build their products"
			/>
			<div className="space-y-5 w-full max-w-screen-md mx-auto">
				{Array.from({ length: 10 }).map((_, index) => (
					<ProductCard
						key={`productId-${index}`}
						id={`productId-${index}`}
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

