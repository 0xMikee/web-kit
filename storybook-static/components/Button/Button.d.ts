import { FC, ReactNode } from '../../../node_modules/react';

export declare enum ButtonColor {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare enum ButtonVariant {
    BORDERED = "bordered",
    FADED = "faded"
}
export declare enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export type ButtonProps = {
    children: ReactNode;
    color: ButtonColor;
    size: ButtonSize;
    className?: string;
    variant?: ButtonVariant;
};
export declare const Button: FC<ButtonProps>;
