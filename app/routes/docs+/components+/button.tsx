import {Button, ButtonColor, ButtonSize} from "@lib/components/Button/Button.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";

const ButtonDocs = () => {
    return (
        <div>
            <h2>Button</h2>
            <Tabs>
                <Tab label="Preview">
                    <Button color={ButtonColor.PRIMARY} size={ButtonSize.SMALL}>Button</Button>
                    <Button color={ButtonColor.SECONDARY} size={ButtonSize.MEDIUM}>Button</Button>
                    <Button color={ButtonColor.PRIMARY} size={ButtonSize.LARGE}>Button</Button>
                </Tab>
                <Tab label="Code">
                    Code wip
                </Tab>
            </Tabs>
        </div>
    );
}

export default ButtonDocs;