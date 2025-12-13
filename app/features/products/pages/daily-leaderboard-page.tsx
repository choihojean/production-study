import type { MetaFunction } from "react-router";
import type { Route } from "./+types/daily-leaderboard-page";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: `Daily Leaderboard ${params.year}/${params.month}/${params.day} | wemake` },
		{ name: "description", content: `Daily leaderboard for ${params.year}/${params.month}/${params.day}` },
	];
}

export function loader({ params }: Route.LoaderArgs) {
	return {
		year: params.year,
		month: params.month,
		day: params.day,
	};
}

export function action({ params }: Route.ActionArgs) {
	return {};
}

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<h1>Daily Leaderboard {loaderData.year}/{loaderData.month}/{loaderData.day}</h1>
		</div>
	);
}

