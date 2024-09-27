import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import {CodeBlock} from "@lib/components/CodeBlock/CodeBlock.tsx";
import DocsTitle from "@app/components/DocsTitle.tsx";
import DocsPreview from "@app/components/DocsPreview.tsx";

const exampleCode =
    `import {Tabs, Tab} from "@0xmike/web-kit";

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

const TabsDocs = () => {
    return (
        <div>
            <DocsTitle title="Tabs" />
            <Tabs>
                <Tab label="Preview">
                    <DocsPreview>
                        <Tabs>
                            <Tab label="Tab 1">
                                <div>This is the content for Tab 1.</div>
                            </Tab>
                            <Tab label="Tab 2">
                                <div>This is the content for Tab 2.</div>
                            </Tab>
                            <Tab label="Tab 3">
                                <div>This is the content for Tab 3.</div>
                            </Tab>
                        </Tabs>
                    </DocsPreview>
                </Tab>
                <Tab label="Code">
                    <CodeBlock withCopy code={exampleCode} customStyles={{backgroundColor: "#181818", color: "#ffffff"}} />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode customStyles={{backgroundColor: "#181818", color: "#ffffff"}} code={"import {Tabs, Tab} from \"@0xmike/web-kit\""} withCopy />
        </div>
    );
}

export default TabsDocs;