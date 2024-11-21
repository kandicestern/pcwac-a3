import * as Tabs from "@radix-ui/react-tabs";
import './Tabs.css';
import Residents from "./ResidentsTabPanel";
import Businesses from "./BusinessesTabPanel";
import Plumbers from "./PlumbersTabPanel";
import BuildersDevs from "./BuildersDevsTabPanel";

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="residents">
    <Tabs.List className="cmp-tabs__tablist" aria-label="Useful links">
      <Tabs.Trigger className="cmp-tabs__tab" value="residents">
        <p className="sw-tab-text">Residents</p>
      </Tabs.Trigger>
      <Tabs.Trigger className="cmp-tabs__tab" value="businesses">
        <p className="sw-tab-text">Businesses</p>
      </Tabs.Trigger>
      <Tabs.Trigger className="cmp-tabs__tab" value="plumbers">
        <p className="sw-tab-text">Plumbers</p>
      </Tabs.Trigger>
      <Tabs.Trigger className="cmp-tabs__tab" value="builders and developers">
        <p className="sw-tab-text">Builders and developers</p>
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content className="TabsContent" value="residents">
      <Residents />
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="businesses">
      <Businesses />
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="plumbers">
      <Plumbers />
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="builders and developers">
      <BuildersDevs />
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;
