import { FC, ReactNode } from 'react';
import styles from './Icon.module.scss';
import {ActionIcon, ActionIconId} from "../ActionIconId.tsx";
import {SvgProps} from "../../../helpers/Svg.tsx";
import classNames from "classnames";
import {SocialIcon, SocialIconId} from "@lib/components/Icons/SocialIconId.tsx";

export type IconId =
    | ActionIconId
    | SocialIconId

export enum IconSize {
    SIZE_6 = 'size6',
    SIZE_8 = 'size8',
    SIZE_10 = 'size10',
    SIZE_12 = 'size12',
    SIZE_14 = 'size14',
    SIZE_16 = 'size16',
    SIZE_18 = 'size18',
    SIZE_20 = 'size20',
    SIZE_24 = 'size24',
    SIZE_32 = 'size32',
    SIZE_40 = 'size40',
    SIZE_48 = 'size48',
    SIZE_64 = 'size64',
    SIZE_72 = 'size72',
    SIZE_80 = 'size80',
}

export type IconProps = {
    id: IconId;
    size?: IconSize;
    title?: string;
    className?: string;
    viewBox?: string;
    onClick?: (...args: any[]) => void;
    children?: ReactNode;
};

type IconComponentResolverProps = SvgProps & {
    id: IconId;
};

const isOfList = <T extends string>(list: Record<string, T>) => {
    return (iconId: string): iconId is T => {
        return Object.values(list).includes(iconId as T);
    };
};

const IconComponentResolver = ({ id, ...svgProps }: IconComponentResolverProps) => {
    switch (true) {
        case isOfList(ActionIconId)(id):
            return <ActionIcon id={id} {...svgProps} />;
        case isOfList(SocialIconId)(id):
            return <SocialIcon id={id} {...svgProps} />;
        default:
            throw new Error(`Icon with id ${id} not found`);
    }
};

export const Icon: FC<IconProps> = ({ id, size, title, className, viewBox, onClick, children }: IconProps) => (
    <IconComponentResolver
        id={id}
        title={title}
        className={classNames(styles.icon, className, {
            [styles.size6]: size === IconSize.SIZE_6,
            [styles.size8]: size === IconSize.SIZE_8,
            [styles.size10]: size === IconSize.SIZE_10,
            [styles.size12]: size === IconSize.SIZE_12,
            [styles.size14]: size === IconSize.SIZE_14,
            [styles.size16]: size === IconSize.SIZE_16,
            [styles.size18]: size === IconSize.SIZE_18,
            [styles.size20]: size === IconSize.SIZE_20,
            [styles.size24]: size === IconSize.SIZE_24,
            [styles.size32]: size === IconSize.SIZE_32,
            [styles.size40]: size === IconSize.SIZE_40,
            [styles.size48]: size === IconSize.SIZE_48,
            [styles.size64]: size === IconSize.SIZE_64,
            [styles.size72]: size === IconSize.SIZE_72,
            [styles.size80]: size === IconSize.SIZE_80,
            [styles.clickable]: onClick,
        })}
        onClick={onClick}
        data-testid={`wk-icon-${id}`}
        viewBox={viewBox}
    >
        {children}
    </IconComponentResolver>
);
