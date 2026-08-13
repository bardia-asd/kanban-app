import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";

const Dashboard = () => {
    return (
        <>
            <PageHeader
                title="داشبورد"
                description="خلاصه‌ای از وضعیت پروژه‌ها و وظایف شما"
                actions={
                    <Button
                        size="lg"
                        className="rounded-full px-4 h-11 text-sm"
                        asChild>
                        <Link to="/board">
                            رفتن به برد
                            <ArrowLeft size={16} />
                        </Link>
                    </Button>
                }
            />
        </>
    );
};

export default Dashboard;
