import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

export enum ButtonColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum ButtonVariant {
    BORDERED = 'bordered',
    FADED = 'faded',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export type ButtonProps = {
    children: ReactNode;
    color: ButtonColor;
    size: ButtonSize;
    className?: string;
    variant?: ButtonVariant;
    isIconOnly?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, color, size, className, variant, isIconOnly }) => (
    <button
        className={classNames(styles.button,
            className,
            isIconOnly && styles.isIconOnly,
            {
                [styles.primary]: color === ButtonColor.PRIMARY,
                [styles.secondary]: color === ButtonColor.SECONDARY,
            },
            {
                [styles.bordered]: variant === ButtonVariant.BORDERED,
                [styles.faded]: variant === ButtonVariant.FADED,
            },
            {
                [styles.small]: size === ButtonSize.SMALL,
                [styles.medium]: size === ButtonSize.MEDIUM,
                [styles.large]: size === ButtonSize.LARGE,
            },
        )}
    >
        {children}
    </button>
);
