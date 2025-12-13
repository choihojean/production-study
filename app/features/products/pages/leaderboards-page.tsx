import type { MetaFunction } from "react-router";
import type { Route } from "./+types/leaderboards-page";

export function meta({ }: Route.MetaArgs): ReturnType<MetaFunction> {
    return [
        { title: "Leaderboards | wemake" },
        { name: "description", content: "Product leaderboards" },
    ];
}

export function loader({ }: Route.LoaderArgs) {
    return {};
}

export function action({ }: Route.ActionArgs) {
    return {};
}

export default function LeaderboardsPage() {
    return (
        <div>
            <h1>Leaderboards</h1>
        </div>
    );
}

