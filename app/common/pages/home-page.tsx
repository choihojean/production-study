import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/products/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
	return [
		{ title: "Home | wemake" },
		{ name: "description", content: "Welcome to wemake!" },
	];
};

export default function HomePage() {
	return (
		<div className="px-20 space-y-40">
			<div className="grid grid-cols-3 gap-4">
				<div>
					<h2 className="text-5xl font-bold leading-tight tracking-tighter">
						Today's Products
					</h2>
					<p className="text-xl font-light text-muted-foreground">
						The best products made by our community today
					</p>
					<Button variant="link" asChild className="text-lg p-0">
						<Link to="/products/leaderboards">Explore All Products &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }, (_, i) => `product-${i}`).map((id) => (
					<ProductCard
						key={id}
						id="productId"
						name="Product Name"
						description="This is a description of the product."
						upvotes={120}
						comments={12}
						views={12}
					/>
				))}
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div>
					<h2 className="text-5xl font-bold leading-tight tracking-tighter">
						Lastest Discussions
					</h2>
					<p className="text-xl font-light text-muted-foreground">
						The latest discussions from our community
					</p>
					<Button variant="link" asChild className="text-lg p-0">
						<Link to="/community">Explore All Discussions &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }, (_, i) => `post-${i}`).map((id) => (
					<PostCard
						key={id}
						id="postId"
						title="What is the best productivity tool?"
						author="Hojin"
						authorAvatar="https://github.com/apple.png"
						category="Productivity"
						timeAgo="12 hours ago"
						replyLink="/community/communityId"
					/>
				))}
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div>
					<h2 className="text-5xl font-bold leading-tight tracking-tighter">
						IdeasGPT
					</h2>
					<p className="text-xl font-light text-muted-foreground">
						Find ideas for your next project
					</p>
					<Button variant="link" asChild className="text-lg p-0">
						<Link to="/ideas">Explore All Ideas &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }, (_, i) => ({ id: `idea-${i}`, claimed: i % 2 === 0 })).map(({ id, claimed }) => (
					<IdeaCard
						key={id}
						id="ideaId"
						title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as website to manage a business."
						views={123}
						timeAgo="12 hours ago"
						likes={12}
						claimLink="/ideas/ideaId/claim"
						claimed={claimed}
					/>
				))}
			</div>
			<div className="grid grid-cols-4 gap-4">
				<div>
					<h2 className="text-5xl font-bold leading-tight tracking-tighter">
						Latest Jobs
					</h2>
					<p className="text-xl font-light text-muted-foreground">
						Find your dream job
					</p>
					<Button variant="link" asChild className="text-lg p-0">
						<Link to="/jobs">Explore All Jobs &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 11 }, (_, i) => `job-${i}`).map((id) => (
					<JobCard
						key={id}
						id="jobId"
						title="Software Engineer"
						company="Meta"
						logoUrl="https://github.com/facebook.png"
						timeAgo="12 hours ago"
						jobType="Full-time"
						location="San Francisco, CA"
						salary="$100,000 - $120,000"
						workLocation="Remote"
						applyLink="/jobs/jobId/apply"
					/>
				))}
			</div>
			<div className="grid grid-cols-4 gap-4">
				<div>
					<h2 className="text-5xl font-bold leading-tight tracking-tighter">
						Find a Team Mate
					</h2>
					<p className="text-xl font-light text-muted-foreground">
						Join a team looking for a new member
					</p>
					<Button variant="link" asChild className="text-lg p-0">
						<Link to="/teams">Explore All Teams &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 7 }, (_, i) => `team-${i}`).map((id) => (
					<TeamCard
						key={id}
						id="teamId"
						username="hojin"
						userAvatar="https://github.com/hojin.png"
						userFallback="H"
						roles={["React Developer", "Backend Developer", "Product Manager"]}
						projectDescription="a new social media platform"
						joinLink="/teams/teamId/join"
					/>
				))}
			</div>
		</div >
	);
}
