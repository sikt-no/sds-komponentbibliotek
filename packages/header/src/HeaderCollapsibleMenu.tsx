import { Button } from "@sikt/sds-button";
import { ListIcon, XIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  Children,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  createContext,
  useEffect,
  useId,
  useState,
} from "react";

const MenuOpenContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}>({
  menuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMenuOpen: () => {},
});
export interface HeaderCollapsibleMenuProps {
  children: ReactNode;
  dropdownOpen?: boolean;
  ariaLabelOpenMenu?: string;
  ariaLabelCloseMenu?: string;
  ariaLabelClose?: string;
}

export const HeaderCollapsibleMenu = ({
  children,
  dropdownOpen = false,
  ariaLabelOpenMenu = "Åpne meny",
  ariaLabelCloseMenu = "Lukk meny",
  ariaLabelClose = "Lukk",
  ...rest
}: HeaderCollapsibleMenuProps) => {
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(dropdownOpen);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";

    const closeWithKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    const closeWithClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLAnchorElement ||
        e.target instanceof HTMLButtonElement
      ) {
        closeMenu();
      }
    };

    const closeWithSubmit = () => {
      closeMenu();
    };

    if (menuOpen) {
      const mobileContent = document.getElementById(
        "sds-header-collapsible__mobile-content",
      );
      if (mobileContent) {
        mobileContent.addEventListener("click", closeWithClick);
        mobileContent.addEventListener("submit", closeWithSubmit);
      }
      window.addEventListener("keydown", closeWithKeyboard);
    }
    return () => {
      const mobileContent = document.getElementById(
        "sds-header-collapsible__mobile-content",
      );
      if (mobileContent) {
        mobileContent.removeEventListener("click", closeWithClick);
        mobileContent.removeEventListener("submit", closeWithSubmit);
      }
      window.removeEventListener("keydown", closeWithKeyboard);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(dropdownOpen);
  }, [dropdownOpen]);

  return (
    <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen }}>
      {/* INFO: The desktop mode content of the header */}
      {Children.map(children, (child, index) => {
        return (
          <>
            {cloneElement(child as ReactElement, {
              className: clsx(
                "sds-header__header-item",
                index + 1 === Children.count(children) &&
                  "sds-header__header-item--last-item",
              ),
            })}
          </>
        );
      })}
      <Button
        variant="transparent"
        icon={menuOpen ? <XIcon /> : <ListIcon />}
        iconVariant={menuOpen ? "right" : "only"}
        onClick={toggleMenu}
        aria-label={menuOpen ? ariaLabelCloseMenu : ariaLabelOpenMenu}
        aria-controls={menuId}
        aria-expanded={menuOpen}
        className="sds-header-collapsible__button"
      >
        {menuOpen && ariaLabelClose}
      </Button>
      <div
        className={clsx(
          "sds-header-collapsible__dropdown",
          menuOpen && "sds-header-collapsible__dropdown--open",
        )}
        aria-hidden={!menuOpen}
        id={menuId}
        {...rest}
      >
        <div
          id="sds-header-collapsible__mobile-content"
          className="sds-header-collapsible__menu"
        >
          {/* INFO: The mobile mode content of the header */}
          {children}
        </div>
      </div>
    </MenuOpenContext.Provider>
  );
};
