import styles from "./DocsTitle.module.scss";
import {ReactNode} from "react";

type DocsTitleProps = {
    title: ReactNode;
};


const DocsTitle = ({title}: DocsTitleProps) => {
    return (
        <h1 className={styles.docsTitle}>
            {title}
        </h1>
    );
};

export default DocsTitle;