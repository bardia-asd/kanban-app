import { supabase } from "@/lib/supabase";

// Replace all labels assigned to a task.
export const setTaskLabels = async (taskId, labelIds = []) => {
    // Remove the task's existing labels.
    const { error: deleteError } = await supabase
        .from("task_labels")
        .delete()
        .eq("task_id", taskId);

    if (deleteError) throw deleteError;

    // Stop here if no labels should be assigned.
    if (labelIds.length === 0) return;

    // Create junction table rows for the selected labels.
    const rows = labelIds.map((labelId) => ({
        task_id: taskId,
        label_id: labelId,
    }));

    // Insert the new label assignments.
    const { error: insertError } = await supabase
        .from("task_labels")
        .insert(rows);

    if (insertError) throw insertError;
};

// Replace all members assigned to a task.
export const setTaskAssignees = async (taskId, memberIds = []) => {
    // Remove the task's existing assignees.
    const { error: deleteError } = await supabase
        .from("task_assignees")
        .delete()
        .eq("task_id", taskId);

    if (deleteError) throw deleteError;

    // Stop here if no members should be assigned.
    if (memberIds.length === 0) return;

    // Create junction table rows for the selected members.
    const rows = memberIds.map((memberId) => ({
        task_id: taskId,
        member_id: memberId,
    }));

    // Insert the new member assignments.
    const { error: insertError } = await supabase
        .from("task_assignees")
        .insert(rows);

    if (insertError) throw insertError;
};
