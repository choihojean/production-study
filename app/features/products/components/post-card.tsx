import { Link } from "react-router";
import { Card, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { DotIcon } from "lucide-react";

interface PostCardProps {
    id: string;
    title: string;
    author: string;
    authorAvatar: string;
    category: string;
    timeAgo: string;
    replyLink?: string;
}

export function PostCard({
    id,
    title,
    author,
    authorAvatar,
    category,
    timeAgo,
    replyLink,
}: PostCardProps) {
    return (
        <Link to={`/community/${id}`}>
            <Card className="bg-transparent hover:bg-card/50 transition-colors">
                <CardHeader className="flex flex-row item-center gap-2">
                    <Avatar className="size-14">
                        <AvatarFallback>{author}</AvatarFallback>
                        {authorAvatar && <AvatarImage src={authorAvatar} />}
                    </Avatar>
                    <div className="space-y-2">
                        <CardTitle>{title}</CardTitle>
                        <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
                            <span>{author} on {category}</span>
                            <DotIcon className="w-4 h-4" />
                            <span>{timeAgo}</span>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter className="flex justify-end">
                    <Button variant="link" asChild>Reply &rarr;</Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
