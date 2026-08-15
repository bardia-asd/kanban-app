import { UserPlus } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import MemberList from "@/features/members/components/MemberList";

const Members = () => {
    return (
        <>
            <PageHeader
                title="اعضا"
                description="مدیریت اعضای فضای کاری و نقش‌ها"
                actions={
                    <Button size="lg" className="rounded-full text-sm">
                        <UserPlus size={16} /> دعوت عضو
                    </Button>
                }
            />

            <MemberList />
        </>
    );
};

export default Members;
