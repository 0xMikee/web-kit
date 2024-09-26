import {Code} from "@lib/components/Code/Code.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import {CodeBlock, CodeBlockTheme} from "@lib/components/CodeBlock/CodeBlock.tsx";

const CodeDocs = () => {
    const exampleCode =
        `import {Code} from "@0xmike/web-kit";

export default function App() {
  return (
    <Code>npm install @0xmike/web-kit</Code>
  );
}`

    return (
        <div>
            <h2>Code</h2>
            <Tabs>
                <Tab label="Preview">
                    <Code>npm install @0xmike/web-kit</Code>
                </Tab>
                <Tab label="Code">
                    <CodeBlock customBgColor="#181818" withCopy code={exampleCode} language="tsx" theme={CodeBlockTheme.vsDark} />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode language="tsx" customBgColor="#181818" theme={CodeBlockTheme.vsDark} code={"import {Code} from \"@0xmike/web-kit\""} withCopy />
        </div>
    );
}

export default CodeDocs;