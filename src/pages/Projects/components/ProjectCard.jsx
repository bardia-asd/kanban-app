import PropTypes from "prop-types";
import { Link } from "react-router";
import { CalendarDays } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatDateShort, formatNumberFa } from "@/utils/formatter";
import { getInitials } from "@/utils/utils";

const ProjectCard = ({ project }) => {
    return (
        <Card>
            <CardHeader className="flex-col gap-0.5">
                {/* Project title and description */}
                <CardTitle className="truncate font-bold">
                    {project.title}
                </CardTitle>

                <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2.5">
                {/* Project progress */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">پیشرفت</span>
                        <span>{formatNumberFa(project.progress)}%</span>
                    </div>

                    <Progress value={project.progress} />
                </div>

                {/* Project deadline and assigned members */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarDays size={14} />
                        {formatDateShort(project.date)}
                    </span>

                    <div className="flex gap-2">
                        {project.members.map((member) => (
                            <Avatar key={member.id} className="size-6">
                                <AvatarImage
                                    src={member.avatar}
                                    alt={member.name}
                                />
                                <AvatarFallback className="text-xs">
                                    {getInitials(member.name)}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                {/* Navigate to the project board */}
                <Button
                    variant="outline"
                    className="w-full rounded-full"
                    asChild>
                    <Link to="/board">مشاهده برد</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

ProjectCard.propTypes = {
    /** Project data displayed inside the card. */
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        progress: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        members: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                avatar: PropTypes.string,
            }),
        ).isRequired,
    }).isRequired,
};

export default ProjectCard;
