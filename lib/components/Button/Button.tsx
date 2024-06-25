import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export type ButtonProps = {
    children: ReactNode;
    type: ButtonType;
    size: ButtonSize;
    className?: string;
};

export const Button: FC<ButtonProps> = ({ children, type, size, className }) => (
    <button
        className={classNames(styles.button, className,
            {
                [styles.primary]: type === ButtonType.PRIMARY,
                [styles.secondary]: type === ButtonType.SECONDARY,
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
