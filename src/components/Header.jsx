import { Book, Moon } from "react-feather";
import "./Header.scss";
export const Header = () => {
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
            >
              <Moon className="button-icon" />
              <span className="sr-only">تم</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
