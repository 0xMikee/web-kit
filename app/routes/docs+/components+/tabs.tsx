import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";

const TabsDocs = () => {
    return (
        <div>
            <h2>Tabs</h2>
            <Tabs>
                <Tab label="Preview">
                    <Tabs>
                        <Tab label="Tab 1">
                            <p>This is the content for Tab 1.</p>
                        </Tab>
                        <Tab label="Tab 2">
                            <p>This is the content for Tab 2.</p>
                        </Tab>
                        <Tab label="Tab 3">
                            <p>This is the content for Tab 3.</p>
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab label="Code">
                    <p>This is the content for Tab 2.</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabsDocs;