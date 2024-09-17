import {Tooltip} from "@lib/components/Tooltip/Tooltip";

const TooltipDocs = () => {
    return (
        <div>
            <h2>Tooltip</h2>
            <Tooltip content="Tooltip content" endDelay={200000} side="top">Hover me</Tooltip>
        </div>
    );
}

export default TooltipDocs;