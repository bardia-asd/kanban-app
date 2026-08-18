import { supabase } from "@/lib/supabase";

// Fetch all columns ordered by their position
export const getColumns = async () => {
    const { data: columns, error } = await supabase
        .from("columns")
        .select("*")
        .order("position");

    if (error) throw error;

    return columns;
};

// Add a new column
export const addColumn = async () => {
    const { data, error } = await supabase
        .from("columns")
        .insert({})
        .select()
        .single();

    if (error) throw error;

    return data;
};

// Update an existing column
export const updateColumn = async (id, updates) => {
    const { data, error } = await supabase
        .from("columns")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

// Delete a column by its ID
export const deleteColumn = async (id) => {
    const { error } = await supabase.from("columns").delete().eq("id", id);

    if (error) throw error;
};
