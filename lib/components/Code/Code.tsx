import {FC, ReactNode} from 'react';
import styles from './Code.module.scss';
import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import classNames from "classnames";
import {ActionIconId} from "@lib/components/Icons/ActionIconId.tsx";

export type CodeProps = {
    children: ReactNode;
    className?: string;
    withCopy?: boolean;
};

export const Code: FC<CodeProps> = ({ children, className, withCopy }) => {
    const copyText = () => {
        if (typeof children === "string") {
            navigator.clipboard.writeText(children).then(() => console.log("Copied:", children))
        }
    }

    return (
        <code className={classNames(className, styles.code)}>
            {children}
            {withCopy && <Icon onClick={copyText} id={ActionIconId.COPY} size={IconSize.SIZE_14} />}
        </code>
)};