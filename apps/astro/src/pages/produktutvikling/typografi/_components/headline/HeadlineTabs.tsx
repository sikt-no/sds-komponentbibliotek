import {
  DesktopIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Tabs, TabList, Tab, TabPanel } from "@sikt/sds-tabs";
import { capitalize } from "../../../../../utils/string.ts";
import { HeadlineTabPanel } from "./HeadlineTabPanel.tsx";

export const HeadlineTabs = ({
  type,
}: {
  type: "editorial" | "application";
}) => {
  return (
    <Tabs>
      <TabList aria-label={`${capitalize(type)} headlines`}>
        <Tab icon={<DeviceMobileIcon className="sds-icon" aria-hidden />}>
          Mobil
        </Tab>
        <Tab icon={<DeviceTabletIcon className="sds-icon" aria-hidden />}>
          Tablet
        </Tab>
        <Tab icon={<DesktopIcon className="sds-icon" aria-hidden />}>
          Desktop
        </Tab>
      </TabList>
      <TabPanel>
        <HeadlineTabPanel type={type} />
      </TabPanel>
      <TabPanel>
        <HeadlineTabPanel type={type} device="tablet" />
      </TabPanel>
      <TabPanel>
        <HeadlineTabPanel type={type} device="desktop" />
      </TabPanel>
    </Tabs>
  );
};
