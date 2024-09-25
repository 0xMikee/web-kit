import {Tooltip} from "@lib/components/Tooltip/Tooltip.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";

const TooltipDocs = () => {
    return (
        <div>
            <h2>Tooltip</h2>
            <Tabs>
                <Tab label="Preview">
                    <Tooltip content="Tooltip content" endDelay={2000} side="top">Hover me</Tooltip>
                </Tab>
                <Tab label="Code">
                    Code wip
                </Tab>
            </Tabs>
        </div>
    );
}

export default TooltipDocs;