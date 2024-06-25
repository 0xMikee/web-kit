import { FC, ReactNode } from '../../../node_modules/react';

export declare enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export type ButtonProps = {
    children: ReactNode;
    type: ButtonType;
    size: ButtonSize;
    className?: string;
};
export declare const Button: FC<ButtonProps>;
