import { Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useBoardStore } from "@/features/board/store/useBoardStore";
import { PRIORITY_META } from "@/features/board/constant/boardConstants";
import { toast } from "sonner";
import { useBoardUIStore } from "@/features/board/store/useBoardUIStore";

const BoardToolbar = () => {
    const searchQuery = useBoardUIStore((s) => s.searchQuery);
    const setSearchQuery = useBoardUIStore((s) => s.setSearchQuery);
    const priorityFilter = useBoardUIStore((s) => s.priorityFilter);
    const setPriorityFilter = useBoardUIStore((s) => s.setPriorityFilter);

    const createColumn = useBoardStore((s) => s.createColumn);

    const handleAddColumn = async () => {
        const result = await createColumn();
        result.success
            ? toast.success("ستون با موفقیت اضافه شد")
            : toast.error(result.error || "خطا در افزودن ستون");
    };

    return (
        <div className="flex flex-wrap items-center gap-2">
            <div className="flex-1 min-w-50">
                <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-11 rounded-full"
                    placeholder="جستجوی وظیفه..."
                    aria-label="جستجوی وظیفه"
                />
            </div>

            <Select
                dir="rtl"
                value={priorityFilter}
                onValueChange={setPriorityFilter}>
                <SelectTrigger className="rounded-full w-40 h-11 gap-2.5">
                    <Filter size={16} />
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="all">همه اولویت‌ها</SelectItem>
                        {Object.entries(PRIORITY_META).map(([k, v]) => (
                            <SelectItem key={k} value={k}>
                                {v.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button
                size="lg"
                variant="outline"
                className="text-sm rounded-full"
                onClick={handleAddColumn}>
                <Plus size={16} /> ستون جدید
            </Button>
        </div>
    );
};

export default BoardToolbar;
