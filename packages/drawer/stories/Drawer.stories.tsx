import React, { useState } from "react";
import { Meta } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerItem,
  DrawerItemGroup,
  DrawerButton,
  DrawerButtonLink,
  useKeyPress,
} from "../index";
import { InfoIcon } from "@sikt/sds-icons";
import { PrimaryLogo } from "@sikt/sds-logo";

const meta: Meta = {
  title: "Components/Drawer",
  component: Drawer,
};

export default meta;

interface RenderStoryCompProps {
  isExpanded: boolean;
  handleToggleDrawer: () => void;
  expandedWidth?: string;
}

const headerStyle: React.CSSProperties = {
  height: "72px",
  backgroundColor: "var(--sds-color-background-action)",
  width: "100vw",
};

const bodyStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "absolute",
  left: "0",
  width: "100%",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "var(--sds-color-background-action)",
  height: "100px",
  zIndex: "2000",
};

const containerStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
};

const mainStyle: React.CSSProperties = {
  paddingTop: "55px",
  position: "absolute",
  marginLeft: "100px",
};

const primaryLogoStyle: React.CSSProperties = {
  fontSize: "20px",
};

function RenderStoryComp({
  isExpanded,
  handleToggleDrawer,
}: RenderStoryCompProps) {
  return (
    <div style={bodyStyle} className={"bodyElement"}>
      <header style={headerStyle} />
      <div className="container" style={containerStyle}>
        <div className={"sidebar-drawer"}>
          <Drawer expanded={isExpanded} onOverlayClick={handleToggleDrawer}>
            <DrawerHeader
              title=""
              icon={<PrimaryLogo style={primaryLogoStyle} />}
              expanded={isExpanded}
              handleToggleDrawer={handleToggleDrawer}
            />
            <DrawerContent>
              <DrawerItemGroup expanded={isExpanded} heading={"Group heading"}>
                <DrawerItem>
                  <DrawerButton
                    label={"Primary Label"}
                    secondaryLabel={"Secondary Label"}
                    icon={<InfoIcon />}
                    onClick={() => alert("DrawerButton clicked.")}
                  />
                </DrawerItem>
                <DrawerItem>
                  <DrawerButton
                    label={"Long Primary Label "}
                    secondaryLabel={"Long Secondary Label"}
                    icon={<InfoIcon />}
                    onClick={() => alert("DrawerButton clicked.")}
                  />
                </DrawerItem>
              </DrawerItemGroup>

              <DrawerItemGroup
                expanded={isExpanded}
                heading={"Group 2 heading"}
              >
                <DrawerItem>
                  <DrawerButtonLink
                    href={"https://www.samordnaopptak.no"}
                    icon={<span>✉️</span>}
                  >
                    Meldinger
                  </DrawerButtonLink>
                </DrawerItem>
                <DrawerItem>
                  <DrawerButtonLink
                    href={"https://www.samordnaopptak.no"}
                    icon={<span>📄</span>}
                  >
                    Mine søknader
                  </DrawerButtonLink>
                </DrawerItem>
              </DrawerItemGroup>
            </DrawerContent>
          </Drawer>
        </div>
        <main style={mainStyle}>
          <p>
            Main Content Content amet, consectetur adipisicing elit. Ab adipisci
            alias deleniti dignissimos ea error harum maiores optio suscipit
            vitae. Et laudantium molestias numquam? Dicta ipsa iure officia sint
            vitae?
          </p>
        </main>
      </div>
      <footer style={footerStyle} />
    </div>
  );
}

export const Default = () => {
  const [isExpanded, setExpanded] = useState(false);
  const handleToggleDrawer = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useKeyPress({
    keyToWatch: "Escape",
    state: isExpanded,
    onKeyPress: () => setExpanded(false),
  });

  return (
    <RenderStoryComp
      isExpanded={isExpanded}
      handleToggleDrawer={handleToggleDrawer}
    />
  );
};
