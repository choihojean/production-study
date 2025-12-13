import type { MetaFunction } from "react-router";
import type { Route } from "./+types/yearly-leaderboard-page";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
	return [
		{ title: `Yearly Leaderboard ${params.year} | wemake` },
		{ name: "description", content: `Yearly leaderboard for ${params.year}` },
	];
}

export function loader({ params }: Route.LoaderArgs) {
	return {
		year: params.year,
	};
}

export function action({ params }: Route.ActionArgs) {
	return {};
}

export default function YearlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<h1>Yearly Leaderboard {loaderData.year}</h1>
		</div>
	);
}

