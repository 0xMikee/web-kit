import type {ReactNode} from "react";
import styles from "./DocsPreview.module.scss"

type DocsPreviewProps = {
    children: ReactNode;
};

const DocsPreview = ({children}: DocsPreviewProps) => {
    return (
        <div className={styles.docsPreview}>
            {children}
        </div>
    );
}

export default DocsPreview;