import type {FC, ReactNode} from 'react';
import styles from "./Link.module.scss";
import {Link as RemixLink, LinkProps as RemixLinkProps, useLocation, useResolvedPath} from "@remix-run/react";
import classNames from "classnames";

interface CustomLinkProps extends RemixLinkProps {
    children: ReactNode;
    className?: string;
    customActivePath?: string;
}

export const Link: FC<CustomLinkProps> = ({ to, children, className, customActivePath, ...props }) => {
    const location = useLocation();
    const resolvedPath = useResolvedPath(to);
    const isActive = location.pathname === resolvedPath.pathname;
    const activePath = customActivePath ? location.pathname.startsWith(customActivePath) : null;

    return (
        <RemixLink to={to} className={classNames(className, styles.link, isActive && styles.active, activePath && styles.active)} {...props}>
            {children}
        </RemixLink>
    )
};
