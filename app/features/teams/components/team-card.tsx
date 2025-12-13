import { Link } from "react-router";
import { Card, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface TeamCardProps {
    id: string;
    username: string;
    userAvatar?: string;
    userFallback: string;
    roles: string[];
    projectDescription: string;
    joinLink?: string;
}

export function TeamCard({
    id,
    username,
    userAvatar,
    userFallback,
    roles,
    projectDescription,
    joinLink,
}: TeamCardProps) {
    return (
        <Link to={`/teams/${id}`}>
            <Card className="bg-transparent hover:bg-card/50 transition-colors">
                <CardHeader className="flex flex-row items-center">
                    <CardTitle className="text-base leading-loose">
                        <Badge variant="secondary" className="inline-flex shadow-sm items-center text-base">
                            <span>@{username}</span>
                            <Avatar className="size-4">
                                <AvatarFallback>{userFallback}</AvatarFallback>
                                {userAvatar && <AvatarImage src={userAvatar} />}
                            </Avatar>
                        </Badge>
                        <span className="ml-2 mr-1">is looking for</span>
                        {roles.map((role, index) => (
                            <Badge key={index} className="text-base">
                                {role}
                            </Badge>
                        ))}
                        <span className="ml-2">to build</span>
                        <span className="ml-2">{projectDescription}</span>
                    </CardTitle>
                </CardHeader>
                <CardFooter className="justify-end">
                    <Button variant="link" asChild>
                        <Link to={joinLink || `/teams/${id}/join`}>Join Team &rarr;</Link>
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
