import BuildersDevs from './BuildersDevsTabPanel';
import Businesses from './BusinessesTabPanel';
import Plumbers from './PlumbersTabPanel';
import Residents from './ResidentsTabPanel';
import * as Tabs from "@radix-ui/react-tabs";
import './Tabs.css';

export default function TabsComponent() {
    return (

        <div
            className="sw-tabs tabs aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
            <div id="ID04" className="cmp-tabs" data-cmp-is="tabs"
                data-cmp-data-layer="{&#34;ID04&#34;:{&#34;shownItems&#34;:[&#34;ID04-item-2e55db9628&#34;],&#34;@type&#34;:&#34;sydneywater-commons/components/sw-tabs&#34;,&#34;repo:modifyDate&#34;:&#34;2021-09-02T02:49:08Z&#34;}}">
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
            </div>
        </div>
    )
}