import { Palette } from "lucide-react";
import { themeData } from "@/data/themeData";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/useThemeStore";

const ThemeSwitcher = () => {
    const currentTheme = useThemeStore((s) => s.theme);
    const applyTheme = useThemeStore((s) => s.applyTheme);

    return (
        <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    className="size-11 rounded-full">
                    <Palette />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-72 rounded-xl p-2">
                <DropdownMenuLabel className="text-muted-foreground">
                    پوسته‌ها
                </DropdownMenuLabel>

                {/* Select and apply the active theme */}
                <DropdownMenuRadioGroup
                    value={currentTheme}
                    onValueChange={applyTheme}
                    className="flex flex-col gap-1">
                    {themeData.map((theme) => (
                        <DropdownMenuRadioItem
                            key={theme.id}
                            value={theme.id}
                            className="rounded-xl border border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary-soft data-[state=checked]:text-primary data-highlighted:bg-secondary data-highlighted:text-secondary-foreground">
                            {/* Theme color preview */}
                            <div
                                className="flex size-10 items-center justify-center rounded-full"
                                style={{
                                    background:
                                        theme.mode === "light"
                                            ? `color-mix(in oklab, ${theme.accent} 12%, #ffffff)`
                                            : `color-mix(in oklab, ${theme.accent} 22%, #24272e)`,
                                }}>
                                <div
                                    className="size-5 rounded-full"
                                    style={{
                                        backgroundColor: theme.accent,
                                    }}
                                />
                            </div>

                            {/* Theme information */}
                            <div className="flex flex-col">
                                <span className="font-medium">
                                    {theme.name}
                                </span>
                                <span className="truncate text-xs text-muted-foreground">
                                    {theme.personality}
                                </span>
                            </div>
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeSwitcher;
