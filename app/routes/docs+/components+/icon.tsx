import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import {ActionIcon, ActionIconId} from "@lib/components/Icons/ActionIconId.tsx";
import {Theme, useTheme} from "remix-themes";
import {Tooltip} from "@lib/components/Tooltip/Tooltip.tsx";
import {SocialIconId} from "@lib/components/Icons/SocialIconId.tsx";

const IconDocs = () => {
    const [, setTheme] = useTheme();
    const actionIcons = Object.values(ActionIconId);
    const socialIcons = Object.values(SocialIconId);

    return (
        <div>
            <h2>Icon</h2>
            <h4>Action Icons</h4>
            {actionIcons.map((iconId) => (
                <div key={iconId} style={{display: "inline-block", margin: "0 10px 0 0"}}>
                    <Icon id={iconId} size={IconSize.SIZE_20}/>
                    <div style={{fontSize: "12px"}}>{iconId}</div>
                </div>
            ))}

            <h4>Social Icons</h4>
            {socialIcons.map((iconId) => (
                <div key={iconId} style={{display: "inline-block", margin: "0 10px 0 0"}}>
                    <Icon id={iconId} size={IconSize.SIZE_20}/>
                    <div style={{fontSize: "12px"}}>{iconId}</div>
                </div>
            ))}

            <h4>onClick Icons</h4>
            <Tooltip content={"ActionIconId.MOON"} side="top" delay={1200} endDelay={1000}>
                <ActionIcon id={ActionIconId.MOON} onClick={() => setTheme(Theme.DARK)} width={20} height={20}/>
            </Tooltip>

            <Tooltip content={"ActionIconId.SUN"} side="top" delay={1200} endDelay={1000}>
                <ActionIcon id={ActionIconId.SUN} onClick={() => setTheme(Theme.LIGHT)} width={20} height={20}/>
            </Tooltip>
        </div>
    );
};

export default IconDocs;