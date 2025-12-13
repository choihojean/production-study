import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
    id: string;
    title: string;
    company: string;
    logoUrl: string;
    timeAgo: string;
    jobType: string;
    location: string;
    salary: string;
    workLocation: string;
    applyLink?: string;
}

export function JobCard({
    id,
    title,
    company,
    logoUrl,
    timeAgo,
    jobType,
    location,
    salary,
    workLocation,
    applyLink,
}: JobCardProps) {
    return (
        <Link to={`/jobs/${id}`}>
            <Card className="bg-transparent hover:bg-card/50 transition-colors">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                        <img
                            src={logoUrl}
                            alt="Company Logo"
                            className="size-10 rounded-full"
                        />
                        <div className="space-x-2">
                            <span className="text-accent-foreground">{company}</span>
                            <span className="text-xs text-muted-foreground">{timeAgo}</span>
                        </div>
                    </div>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-x-1">
                    <Badge variant="secondary">{jobType}</Badge>
                    <Badge variant="secondary">{workLocation}</Badge>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-muted-foreground">{salary}</span>
                        <span className="text-sm font-medium text-muted-foreground">{location}</span>
                    </div>
                    <Button variant="outline" asChild>
                        <Link to={applyLink || `/jobs/${id}/apply`}>Apply Now</Link>
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
