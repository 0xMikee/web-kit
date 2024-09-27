import {Code} from "@lib/components/Code/Code.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import {CodeBlock} from "@lib/components/CodeBlock/CodeBlock.tsx";
import DocsTitle from "@app/components/DocsTitle.tsx";
import DocsPreview from "@app/components/DocsPreview.tsx";

const exampleCode =
    `import {Code} from "@0xmike/web-kit";

export default function App() {
  return (
    <Code>npm install @0xmike/web-kit</Code>
  );
}`

const CodeDocs = () => {
    return (
        <div>
            <DocsTitle title="Code" />
            <Tabs>
                <Tab label="Preview">
                    <DocsPreview>
                        <Code>npm install @0xmike/web-kit</Code>
                    </DocsPreview>
                </Tab>
                <Tab label="Code">
                    <CodeBlock customStyles={{backgroundColor: "#181818", color: "#ffffff"}} withCopy code={exampleCode} />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode customStyles={{backgroundColor: "#181818", color: "#ffffff"}} code={"import {Code} from \"@0xmike/web-kit\""} withCopy />
        </div>
    );
}

export default CodeDocs;