import PageHeader from "@/components/layout/PageHeader";
import Profile from "./components/Profile";
import Announcements from "./components/Announcements";

const Settings = () => {
    return (
        <>
            <PageHeader
                title="تنظیمات"
                description="شخصی‌سازی فضای کاری شما "
            />

            <div className="mx-auto w-full max-w-5xl space-y-4">
                <Profile />

                <Announcements />
            </div>
        </>
    );
};

export default Settings;
