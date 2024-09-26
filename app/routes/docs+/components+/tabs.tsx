import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import {CodeBlock, CodeBlockTheme} from "@lib/components/CodeBlock/CodeBlock.tsx";

const TabsDocs = () => {

    const exampleCode =
        `import Tabs, {Tab} from "@0xmike/web-kit";

export default function App() {
  return (
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
  );
}`

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

                    <CodeBlock code={exampleCode} language="typescript" theme={CodeBlockTheme.vsDark} customBgColor="#181818" />
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabsDocs;