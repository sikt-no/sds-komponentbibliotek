import { CSSProperties, useState } from "react";
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
import { Logo } from "@sikt/sds-logo";

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

const headerStyle: CSSProperties = {
  height: "72px",
  backgroundColor: "var(--sds-color-layout-background-primary)",
  width: "100vw",
};

const bodyStyle: CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "absolute",
  left: "0",
  width: "100%",
};

const footerStyle: CSSProperties = {
  backgroundColor: "var(--sds-color-layout-background-primary)",
  height: "100px",
  zIndex: "2000",
};

const containerStyle: CSSProperties = {
  flex: 1,
  display: "flex",
};

const mainStyle: CSSProperties = {
  paddingTop: "55px",
  position: "absolute",
  marginLeft: "100px",
};

const primaryLogoStyle: CSSProperties = {
  fontSize: "20px",
};

const StoryComp = ({
  isExpanded,
  handleToggleDrawer,
}: RenderStoryCompProps) => {
  return (
    <div style={bodyStyle} className="bodyElement">
      <header style={headerStyle} />
      <div className="container" style={containerStyle}>
        <div className="sidebar-drawer">
          <Drawer expanded={isExpanded} onOverlayClick={handleToggleDrawer}>
            <DrawerHeader
              title="Title"
              icon={<Logo style={primaryLogoStyle} />}
              expanded={isExpanded}
              handleToggleDrawer={handleToggleDrawer}
            />
            <DrawerContent>
              <DrawerItemGroup
                expanded={isExpanded}
                heading="Group heading"
                aria-label="Group heading, Navigation"
              >
                <DrawerItem>
                  <DrawerButton
                    icon={<InfoIcon />}
                    onClick={() => {
                      alert("DrawerButton clicked.");
                    }}
                  >
                    Primary Label
                  </DrawerButton>
                </DrawerItem>
                <DrawerItem>
                  <DrawerButton
                    secondaryLabel="Long Secondary Label"
                    icon={<InfoIcon />}
                    onClick={() => {
                      alert("DrawerButton clicked.");
                    }}
                  >
                    Long Primary Label
                  </DrawerButton>
                </DrawerItem>
              </DrawerItemGroup>

              <DrawerItemGroup
                expanded={isExpanded}
                heading="Group 2 heading"
                aria-label="Group 2 heading, Navigation"
              >
                <DrawerItem>
                  <DrawerButtonLink
                    href="/"
                    icon={<InfoIcon />}
                    secondaryLabel="Secondary Label"
                    aria-label="Custom aria label"
                  >
                    Meldinger
                  </DrawerButtonLink>
                </DrawerItem>
                <DrawerItem>
                  <DrawerButtonLink href="/" icon={<span>📄</span>}>
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
};

export const Default = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleDrawer = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  useKeyPress({
    keyToWatch: "Escape",
    state: isExpanded,
    onKeyPress: () => {
      setIsExpanded(false);
    },
  });

  return (
    <StoryComp
      isExpanded={isExpanded}
      handleToggleDrawer={handleToggleDrawer}
    />
  );
};
