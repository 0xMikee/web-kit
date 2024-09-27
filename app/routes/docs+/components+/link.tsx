import {Link} from "@lib/components/Link/Link.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";
import DocsTitle from "@app/components/DocsTitle.tsx";
import {CodeBlock} from "@lib/components/CodeBlock/CodeBlock.tsx";
import DocsPreview from "@app/components/DocsPreview.tsx";

const exampleCode =
    `import {Link} from "@0xmike/web-kit";

export default function App() {
  return (
    <Link to="#" >
        Link
    </Link>
  );
}`

const LinkDocs = () => {
    return (
        <div>
            <DocsTitle title="Link" />
            <Tabs>
                <Tab label="Preview">
                    <DocsPreview>
                        <Link to="#" >
                            Link
                        </Link>
                    </DocsPreview>
                </Tab>
                <Tab label="Code">
                    <CodeBlock withCopy code={exampleCode} customStyles={{backgroundColor: "#181818", color: "#ffffff"}} />
                </Tab>
            </Tabs>
            <h4>Import:</h4>
            <CodeBlock inlineCode customStyles={{backgroundColor: "#181818", color: "#ffffff"}} code={"import {CodeBlock} from \"@0xmike/web-kit\""} withCopy />
        </div>
    );
}

export default LinkDocs;