import { supabase } from "@/lib/supabase";

export const getMembers = async () => {
    const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
};

export const addMember = async (member) => {
    const { data, error } = await supabase
        .from("members")
        .insert(member)
        .select()
        .single();

    if (error) throw error;

    return data;
};
