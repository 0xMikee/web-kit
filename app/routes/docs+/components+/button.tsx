import {Button, ButtonColor, ButtonSize} from "@lib/components/Button/Button.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import DocsTitle from "@app/components/DocsTitle.tsx";
import {CodeBlock} from "@lib/components/CodeBlock/CodeBlock.tsx";
import DocsPreview from "@app/components/DocsPreview.tsx";

const exampleCode =
    `import {Code} from "@0xmike/web-kit";

export default function App() {
  return (
    <Button color={ButtonColor.PRIMARY} size={ButtonSize.MEDIUM}>Button</Button>
  );
}`


const ButtonDocs = () => {

    return (
        <div>
            <DocsTitle title="Button" />
            <Tabs>
                <Tab label="Preview">
                    <DocsPreview >
                        <Button color={ButtonColor.PRIMARY} size={ButtonSize.MEDIUM}>Button</Button>
                    </DocsPreview>
                </Tab>
                <Tab label="Code">
                    <CodeBlock code={exampleCode} customStyles={{backgroundColor: "#181818", color: "#ffffff"}} withCopy />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode customStyles={{backgroundColor: "#181818", color: "#ffffff"}} code={"import {Code} from \"@0xmike/web-kit\""} withCopy />
        </div>
    );
}

export default ButtonDocs;