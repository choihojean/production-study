import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
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
				{Array.from({ length: 10 }).map((_, index) => (
					<PostCard
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
		</div >
	);
}
