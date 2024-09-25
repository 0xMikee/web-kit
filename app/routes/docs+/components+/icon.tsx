import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import {ActionIcon, ActionIconId} from "@lib/components/Icons/ActionIconId.tsx";
import {Theme, useTheme} from "remix-themes";
import {Tooltip} from "@lib/components/Tooltip/Tooltip.tsx";

const IconDocs = () => {
    const [, setTheme] = useTheme();
    return (
        <div>
            <h2>Icon</h2>
            <Icon id={ActionIconId.SYSTEM} size={IconSize.SIZE_20} />
            <h4>onClick Icon</h4>
            <Tooltip content={"ActionIconId.MOON"} side="top" delay={1200} endDelay={1000} >
                <ActionIcon id={ActionIconId.MOON} width={20} height={20} onClick={() => setTheme(Theme.DARK)} />
            </Tooltip>
            <Tooltip content={"ActionIconId.SUN"} side="top" delay={1200} endDelay={1000} >
                <ActionIcon id={ActionIconId.SUN} width={20} height={20} onClick={() => setTheme(Theme.LIGHT)} />
            </Tooltip>
        </div>
    );
}

export default IconDocs;