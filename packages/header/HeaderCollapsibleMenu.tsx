import { Button } from "@sikt/sds-button";
import { ListIcon, XIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import React, {
  Children,
  ReactElement,
  cloneElement,
  useEffect,
  useId,
  useState,
} from "react";

export interface HeaderCollapsibleMenuProps {
  children: React.ReactNode;
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";

    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(dropdownOpen);
  }, [dropdownOpen]);

  return (
    <>
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
        <div className="sds-header-collapsible__menu">
          {/* INFO: The mobile mode content of the header */}
          {children}
        </div>
      </div>
    </>
  );
};
