import {Code} from "@lib/components/Code/Code.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";

const CodeDocs = () => {
    return (
        <div>
            <h2>Code</h2>
            <Tabs>
                <Tab label="Preview">
                    <Code >npm i @0xmike/web-kit</Code>
                    <Code withCopy >npm i @0xmike/web-kit</Code>
                </Tab>
                <Tab label="Code">
                    Code wip
                </Tab>
            </Tabs>
        </div>
    );
}

export default CodeDocs;