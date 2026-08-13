import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatNumberFa } from "@/utils/formatter";

const projectProgress = [
    {
        id: 1,
        title: "طراحی مجدد وب‌سایت",
        progress: 82,
    },
    {
        id: 2,
        title: "اپلیکیشن موبایل",
        progress: 64,
    },
    {
        id: 3,
        title: "سیستم مدیریت وظایف",
        progress: 48,
    },
    {
        id: 4,
        title: "داشبورد تحلیل داده",
        progress: 35,
    },
    {
        id: 5,
        title: "بهینه‌سازی زیرساخت",
        progress: 21,
    },
];

const ProjectsProgress = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>پیشرفت پروژه‌ها</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-col gap-2">
                    {projectProgress.map((project) => (
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
