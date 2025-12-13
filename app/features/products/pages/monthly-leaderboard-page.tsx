import type { MetaFunction } from "react-router";
import type { Route } from "./+types/monthly-leaderboard-page";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: `Monthly Leaderboard ${params.year}/${params.month} | wemake` },
		{ name: "description", content: `Monthly leaderboard for ${params.year}/${params.month}` },
	];
}

export function loader({ params }: Route.LoaderArgs) {
	return {
		year: params.year,
		month: params.month,
	};
}

export function action({ params }: Route.ActionArgs) {
	return {};
}

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<h1>Monthly Leaderboard {loaderData.year}/{loaderData.month}</h1>
		</div>
	);
}

