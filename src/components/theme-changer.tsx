import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="transition-all duration-300">
            {theme === 'light' ? (
                <button
                    onClick={() => setTheme('dark')}
                    className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black transition-colors duration-200 flex items-center gap-2"
                >
                    <FiMoon className="text-gray-800" />
                    <span>มืด</span>
                </button>
            ) : (
                <button
                    onClick={() => setTheme('light')}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200 flex items-center gap-2"
                >
                    <FiSun className="text-yellow-300" />
                    <span>สว่าง</span>
                </button>
            )}
        </div>
    )
};