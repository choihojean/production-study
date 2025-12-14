import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramSchema = z.object({
	year: z.coerce.number(),
	month: z.coerce.number(),
	day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
	const { success, data: parsedData } = paramSchema.safeParse(params);
	if (!success) {
		throw data({
			error_code: "INVALID_PARAMS",
			error_message: "The params are invalid",
		}, { status: 400 });
	}
	const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");

	if (!date.isValid) {
		throw data({
			error_code: "INVALID_DATE",
			error_message: "The date is invalid",
		}, { status: 400 });
	}

	const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
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

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
	const urlDate = DateTime.fromObject({
		year: loaderData.year,
		month: loaderData.month,
		day: loaderData.day
	});
	const prevDate = urlDate.minus({ days: 1 });
	const nextDate = urlDate.plus({ days: 1 });
	const isToday = urlDate.equals(DateTime.now().startOf("day"));
	return (
		<div className="space-y-5">
			<Hero
				title={`The best products of ${urlDate.toLocaleString(DateTime.DATE_MED)}`}
			/>
			<div className="flex item-center justify-center gap-2">
				<Button variant="secondary" asChild>
					<Link to={`/products/leaderboards/daily/${prevDate.year}/${prevDate.month}/${prevDate.day}`}>&larr; {prevDate.toLocaleString(DateTime.DATE_SHORT)}</Link>
				</Button>
				{!isToday && (
					<Button variant="secondary" asChild>
						<Link to={`/products/leaderboards/daily/${nextDate.year}/${nextDate.month}/${nextDate.day}`}>{nextDate.toLocaleString(DateTime.DATE_SHORT)} &rarr;</Link>
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