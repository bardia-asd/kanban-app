import { useEffect, useState } from "react";
import { toast } from "sonner";
import { addMember, getMembers } from "../services/membersService";

export const useMembers = () => {
    const [members, setMembers] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [mutationLoading, setMutationLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMembers = async () => {
        setFetchLoading(true);
        setError(null);

        try {
            const data = await getMembers();
            setMembers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setFetchLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const createMember = async (member) => {
        setMutationLoading(true);
        setError(null);

        try {
            const newMember = await addMember(member);

            setMembers((prev) => [newMember, ...prev]);

            toast.success("عضو جدید ایجاد شد");

            return newMember;
        } catch (error) {
            toast.error(error.message);
            setError(error.message);
            throw error;
        } finally {
            setMutationLoading(false);
        }
    };

    return {
        members,
        fetchLoading,
        mutationLoading,
        error,
        createMember,
        refetch: fetchMembers,
    };
};
