import { supabase } from "@/lib/supabase";

// Fetch all tasks with their labels and assignees
export const getTasks = async () => {
    const { data: tasks, error } = await supabase
        .from("tasks")
        .select(
            `
            *,
            task_labels(label:labels(*)),
            task_assignees(member:members(*)),
            checklist_items(*),
            comments(*)
        `,
        )
        .order("position");

    if (error) throw error;

    return tasks;
};

// Add a new task with its related data
export const addTask = async (task) => {
    const { data, error } = await supabase
        .from("tasks")
        .insert(task)
        .select(
            `
            *,
            task_labels(label:labels(*)),
            task_assignees(member:members(*)),
            checklist_items(*),
            comments(*)
        `,
        )
        .single();

    if (error) throw error;

    return data;
};

// Update an existing task
export const updateTask = async (id, updates) => {
    const { data, error } = await supabase
        .from("tasks")
        .update(updates)
        .eq("id", id)
        .select(
            `
            *,
            task_labels(label:labels(*)),
            task_assignees(member:members(*)),
            checklist_items(*),
            comments(*)
        `,
        )
        .single();

    if (error) throw error;

    return data;
};

// Update a task's column and position after a drag-and-drop operation
export const updateTaskPosition = async (id, { column_id, position }) => {
    const { data, error } = await supabase
        .from("tasks")
        .update({
            column_id,
            position,
        })
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

// Delete a task by its ID
export const deleteTask = async (id) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) throw error;
};
