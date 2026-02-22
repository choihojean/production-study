import { DateTime } from "luxon";
import type { Route } from "./+types/monthly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramSchema = z.object({
	year: z.coerce.number(),
	month: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
	const date = DateTime.fromObject({
		year: Number(params.year),
		month: Number(params.month),
	}).setZone("Asia/Seoul");
	return [
		{ title: `Best of ${date.toLocaleString({ month: "long", year: "2-digit" })} | wemake` },
	];
}

export const loader = ({ params }: Route.LoaderArgs) => {
	const { success, data: parsedData } = paramSchema.safeParse(params);
	if (!success) {
		throw data({
			error_code: "INVALID_PARAMS",
			error_message: "The params are invalid",
		}, { status: 400 });
	}
	const date = DateTime.fromObject({
		year: parsedData.year,
		month: parsedData.month,
	}).setZone("Asia/Seoul");

	if (!date.isValid) {
		throw data({
			error_code: "INVALID_DATE",
			error_message: "The date is invalid",
		}, { status: 400 });
	}

	const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
	if (date > today) {
		throw data({
			error_code: "FUTURE_DATE",
			error_message: "The date is in the future",
		}, { status: 400 });
	}
	return {
		...parsedData
	};
}

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
	const urlDate = DateTime.fromObject({
		year: loaderData.year,
		month: loaderData.month,
	});
	const prevMonth = urlDate.minus({ months: 1 });
	const nextMonth = urlDate.plus({ months: 1 });
	const isToday = urlDate.equals(DateTime.now().startOf("month"));
	return (
		<div className="space-y-5">
			<Hero
				title={`Best of  ${urlDate.toLocaleString({
					month: "long",
					year: "2-digit",
				})}`}
				description="The best products of the month"
			/>
			<div className="flex item-center justify-center gap-2">
				<Button variant="secondary" asChild>
					<Link to={`/products/leaderboards/monthly/${prevMonth.year}/${prevMonth.month}`}>&larr; {prevMonth.toLocaleString({
						month: "long",
						year: "2-digit",
					})}
					</Link>
				</Button>
				{!isToday && (
					<Button variant="secondary" asChild>
						<Link to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}>{nextMonth.toLocaleString({
							month: "long",
							year: "2-digit",
						})} &rarr;</Link>
					</Button>
				)}
			</div>
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	if (isRouteErrorResponse(error)) {
		return <div>{error.data.error_message} / {error.data.error_code}</div>
	}
	if (error instanceof Error) {
		return <div>{error.message}</div>
	}
	return (
		<div>Unknown error</div>
	);
}