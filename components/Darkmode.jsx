import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function Darkmode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeOnClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div
      className="fixed bottom-12 right-12 inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-white text-[1.3rem] text-gray-900 shadow-lg transition hover:bg-pink-500 hover:text-white"
      onClick={handleThemeOnClick}
    >
      {theme === "light" ? (
        <>
          <RiMoonClearLine />
        </>
      ) : (
        <>
          <RiSunLine />
        </>
      )}
    </div>
  );
}
