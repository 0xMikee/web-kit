import {Button, ButtonColor, ButtonSize} from "@lib/components/Button/Button";

const ButtonDocs = () => {
    return (
        <div>
            <Button color={ButtonColor.PRIMARY} size={ButtonSize.SMALL}>Button</Button>
            <Button color={ButtonColor.SECONDARY} size={ButtonSize.MEDIUM}>Button</Button>
            <Button color={ButtonColor.PRIMARY} size={ButtonSize.LARGE}>Button</Button>
        </div>
    );
}

export default ButtonDocs;