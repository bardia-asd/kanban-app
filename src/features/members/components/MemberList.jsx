import { useEffect } from "react";
import { useMemberStore } from "../store/useMemberStore";
import MemberCard from "./MemberCard";
import MemberCardSkeleton from "./MemberCardLoading";
import MemberEmpty from "./MemberEmpty";
import MemberError from "./MemberError";

const MemberList = () => {
    const members = useMemberStore((s) => s.members);
    const fetchMembers = useMemberStore((s) => s.fetchMembers);
    const loading = useMemberStore((s) => s.fetchLoading);
    const error = useMemberStore((s) => s.error);

    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {loading && <MemberCardSkeleton />}

            {error && <MemberError onRefetch={fetchMembers} />}

            {!loading && !error && members.length === 0 && <MemberEmpty />}

            {!loading &&
                !error &&
                members.length > 0 &&
                members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
        </div>
    );
};

export default MemberList;
