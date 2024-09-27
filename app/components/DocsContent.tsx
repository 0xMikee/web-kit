import styles from "./DocsContent.module.scss";
import type { ReactNode } from "react";

export type DocsContentProps = {
    children: ReactNode;
};

const DocsContent = ({ children }: DocsContentProps) => {
    return (
        <div className={styles.docsContent}>
            {children}
        </div>
    );
};

export default DocsContent;
