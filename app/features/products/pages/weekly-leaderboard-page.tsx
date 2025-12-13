import type { MetaFunction } from "react-router";
import type { Route } from "./+types/weekly-leaderboard-page";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: `Weekly Leaderboard ${params.year}/W${params.week} | wemake` },
		{ name: "description", content: `Weekly leaderboard for ${params.year} week ${params.week}` },
	];
}

export function loader({ params }: Route.LoaderArgs) {
	return {
		year: params.year,
		week: params.week,
	};
}

export function action({ params }: Route.ActionArgs) {
	return {};
}

export default function WeeklyLeaderboardPage({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<h1>Weekly Leaderboard {loaderData.year} Week {loaderData.week}</h1>
		</div>
	);
}

