import styles from "./DocsLayout.module.scss";
import type { ReactNode } from "react";

export type DocsLayoutProps = {
    children: ReactNode;
};

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <div className={styles.docsLayout}>
            {children}
        </div>
    );
};

export default DocsLayout;
