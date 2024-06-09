import { useEffect, useState } from "react";
import { Book, Moon, Sun } from "react-feather";

import "./Header.scss";

export const Header = () => {
  const getInitialTheme = () => {
    // Check localStorage for a saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="main-header">
      <nav className="main-header-nav">
        <div className="main-header-nav--inner">
          <a className="main-header-nav--inner--right" href="/">
            <Book className="main-header-nav--inner--right__logo" />
            <span className="main-header-nav--inner--right__name self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              کتابخانه
            </span>
          </a>
          <div className="main-header-nav--inner--left">
            <button
              type="button"
              className="main-header-nav--inner--left__switch-theme"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Moon className="button-icon" />
              ) : (
                <Sun className="button-icon" />
              )}
              <span className="sr-only">تم</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
