import type {FC, ReactNode} from 'react';
import styles from "./Link.module.scss";
import { Link as RemixLink, LinkProps as RemixLinkProps } from "@remix-run/react";
import classNames from "classnames";

interface CustomLinkProps extends RemixLinkProps {
    children: ReactNode;
    className?: string;
}

export const Link: FC<CustomLinkProps> = ({ to, children, className, ...props }) => (
    <RemixLink to={to} className={classNames(styles.link, className)} {...props}>
        {children}
    </RemixLink>
);
