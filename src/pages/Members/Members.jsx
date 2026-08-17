import PageHeader from "@/components/layout/PageHeader";
import MemberList from "@/features/members/components/MemberList";
import MemberAddDialog from "@/features/members/components/MemberAddDialog";

const Members = () => {
    return (
        <>
            <PageHeader
                title="اعضا"
                description="مدیریت اعضای فضای کاری و نقش‌ها"
                actions={<MemberAddDialog />}
            />

            <MemberList />
        </>
    );
};

export default Members;
