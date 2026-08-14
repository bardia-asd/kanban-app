import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatNumberFa } from "@/utils/formatter";
import { projectData } from "@/data/projectsData";

const ProjectsProgress = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>پیشرفت پروژه‌ها</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-col gap-2">
                    {projectData.map((project) => (
                        <li className="space-y-2" key={project.id}>
                            <div className="flex items-center justify-between gap-2 text-sm">
                                <p className="truncate">{project.title}</p>
                                <span className="text-muted-foreground">
                                    {formatNumberFa(project.progress)}%
                                </span>
                            </div>
                            <Progress value={project.progress} />
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default ProjectsProgress;
