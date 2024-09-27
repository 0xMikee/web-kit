import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import {CodeBlock} from "@lib/components/CodeBlock/CodeBlock.tsx";
import DocsTitle from "@app/components/DocsTitle.tsx";
import DocsPreview from "@app/components/DocsPreview.tsx";
import DocsContent from "@app/components/DocsContent.tsx";

const previewCode = `
const greet = (name: string) => {
  return 'Hello, ' + name + '!';
}

console.log(greet('World'));
`;

const exampleCode = `
import { CodeBlock } from '@0xmike/web-kit';

const App = () => {
  const codeSnippet = 
    \`
        const greet = (name: string) => {
          return 'Hello, ' + name + '!';
        }
        
        console.log(greet('World'));
    \`;

  return (
    <CodeBlock
      code={codeSnippet}
      customStyles={{
        backgroundColor: "#181818",
        color: "#ffffff"
      }}
    />
  );
}

export default App;
`;

const CodeBlockDocs = () => {
    return (
        <DocsContent>
            <DocsTitle title="Code Block" />
            <Tabs>
                <Tab label="Preview">
                    <DocsPreview>
                        <CodeBlock  code={previewCode} customStyles={{backgroundColor: "#181818", color: "#ffffff"}} />
                    </DocsPreview>
                </Tab>
                <Tab label="Code">
                    <CodeBlock code={exampleCode} customStyles={{backgroundColor: "#181818", color: "#ffffff"}} withCopy />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode customStyles={{backgroundColor: "#181818", color: "#ffffff"}} code={"import {CodeBlock} from \"@0xmike/web-kit\""} withCopy />
        </DocsContent>
    );
}

export default CodeBlockDocs;