import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import {CodeBlock, CodeBlockTheme} from "@lib/components/CodeBlock/CodeBlock.tsx";

const CodeBlockDocs = () => {
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
      language="typescript"
      customBgColor="#181818"
      theme={CodeBlockTheme.vsDark}
      withCopy
    />
  );
}

export default App;
`;

    return (
        <div>
            <h2>Code Block</h2>
            <Tabs>
                <Tab label="Preview">
                    <CodeBlock customBgColor="#181818" withCopy code={previewCode} language="tsx" theme={CodeBlockTheme.vsDark} />
                </Tab>
                <Tab label="Code">
                    <CodeBlock customBgColor="#181818" withCopy code={exampleCode} language="tsx" theme={CodeBlockTheme.vsDark} />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode language="tsx" customBgColor="#181818" theme={CodeBlockTheme.vsDark} code={"import {CodeBlock} from \"@0xmike/web-kit\""} withCopy />
        </div>
    );
}

export default CodeBlockDocs;