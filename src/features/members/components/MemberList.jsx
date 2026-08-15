import { useMembers } from "../hooks/useMembers";
import MemberCard from "./MemberCard";
import MemberCardSkeleton from "./MemberCardLoading";
import MemberEmpty from "./MemberEmpty";
import MemberError from "./MemberError";

const MemberList = () => {
    const { members, fetchLoading, error, refetch } = useMembers();

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fetchLoading && <MemberCardSkeleton />}

            {error && <MemberError onRefetch={refetch} />}

            {!fetchLoading && !error && members.length === 0 && <MemberEmpty />}

            {!fetchLoading &&
                !error &&
                members.length > 0 &&
                members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
        </div>
    );
};

export default MemberList;
