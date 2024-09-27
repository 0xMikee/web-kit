import {Tooltip} from "@lib/components/Tooltip/Tooltip.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import DocsTitle from "@app/components/DocsTitle.tsx";
import DocsPreview from "@app/components/DocsPreview.tsx";
import {CodeBlock, CodeBlockTheme} from "@lib/components/CodeBlock/CodeBlock.tsx";
import DocsContent from "@app/components/DocsContent.tsx";

const exampleCode =
    `import {Tooltip} from "@0xmike/web-kit";

export default function App() {
  return (
      <Tooltip content="Tooltip content" delay={500} endDelay={1000} side="top">Hover me</Tooltip>
  );
}`

const TooltipDocs = () => {
    return (
        <DocsContent>
            <DocsTitle title="Tooltip" />
            <Tabs>
                <Tab label="Preview">
                    <DocsPreview>
                        <Tooltip content="Tooltip content" delay={500} endDelay={1000} side="top">Hover me</Tooltip>
                    </DocsPreview>
                </Tab>
                <Tab label="Code">
                    <CodeBlock code={exampleCode} withCopy customStyles={{backgroundColor: "#181818", color: "#ffffff"}} />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode customStyles={{backgroundColor: "#181818", color: "#ffffff"}}  theme={CodeBlockTheme.vsDark} code={"import {Tooltip} from \"@0xmike/web-kit\""} withCopy />
        </DocsContent>
    );
}

export default TooltipDocs;