import type { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    color: ButtonColor;
    size: ButtonSize;
    className?: string;
    variant?: ButtonVariant;
    isIconOnly?: boolean;
    onClick?: (...args: any[]) => void | null;
};

export const Button: FC<ButtonProps> = ({
    children,
    color,
    size,
    className,
    variant,
    isIconOnly,
    onClick,
}) => {
    const buttonClassNames = classNames(
        styles.button,
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
    );

    return (
        <button
            className={buttonClassNames}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
