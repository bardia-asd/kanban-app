import { supabase } from "@/lib/supabase";

export const fetchLabels = async () => {
    const { data, error } = await supabase
        .from("labels")
        .select("*")
        .order("created_at");

    if (error) throw error;

    return data;
};
