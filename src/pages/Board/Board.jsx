import PageHeader from "@/components/layout/PageHeader";
import BoardColumns from "@/features/board/components/BoardColumns";

const Board = () => {
    return (
        <>
            <PageHeader
                title="برد کانبان"
                description="وظایف را بکشید و بین ستون‌ها جابه‌جا کنید"
            />

            <BoardColumns />
        </>
    );
};

export default Board;
