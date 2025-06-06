import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../_hooks/hooks";
import { toggleTheme } from "../../../_store/theme/themeSlice";
import { useEffect } from "react";

export default function HeaderThemeButton({ isInMenu }: { isInMenu: boolean }) {
  const theme = useAppSelector((s) => s.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button
      className={`theme-button ${
        !isInMenu ? (theme === "light" ? "light" : "") : ""
      }`}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === "dark" ? (
        <Sun color="black" />
      ) : (
        <Moon color={`${isInMenu ? "black" : "white"}`} />
      )}
    </button>
  );
}
