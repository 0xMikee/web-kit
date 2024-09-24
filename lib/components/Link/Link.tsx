import type {FC, ReactNode} from 'react';
import styles from "./Link.module.scss";
import {Link as RemixLink, LinkProps as RemixLinkProps, useLocation, useResolvedPath} from "@remix-run/react";
import classNames from "classnames";

interface CustomLinkProps extends RemixLinkProps {
    children: ReactNode;
    className?: string;
}

export const Link: FC<CustomLinkProps> = ({ to, children, className, ...props }) => {
    const location = useLocation();
    const resolvedPath = useResolvedPath(to);
    const isActive = location.pathname === resolvedPath.pathname;

    return (
        <RemixLink to={to} className={classNames(styles.link, className, isActive && styles.active)} {...props}>
            {children}
        </RemixLink>
    )
};
