import PageHeader from "@/components/layout/PageHeader";
import BoardColumns from "@/features/board/components/board/BoardColumns";
import BoardToolbar from "@/features/board/components/board/BoardToolbar";

const Board = () => {
    return (
        <>
            <PageHeader
                title="برد کانبان"
                description="وظایف را بکشید و بین ستون‌ها جابه‌جا کنید"
            />

            <div className="space-y-5">
                <BoardToolbar />

                <BoardColumns />
            </div>
        </>
    );
};

export default Board;
