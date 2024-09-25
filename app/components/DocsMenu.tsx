import {Link} from "@lib/components/Link/Link.tsx";
import styles from "./Menu.module.scss";

const DocsMenu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.sectionTitle}>Docs</div>
            <Link to="/docs" className={styles.menuLink} >
                Intro
            </Link>
            <div className={styles.sectionTitle}>Components</div>
            <Link to="components/button" className={styles.menuLink} >
                Button
            </Link>
            <Link to="components/code" className={styles.menuLink} >
                Code
            </Link>
            <Link to="components/icon" className={styles.menuLink} >
                Icon
            </Link>
            <Link to="components/link" className={styles.menuLink} >
                Link
            </Link>
            <Link to="components/tabs" className={styles.menuLink} >
                Tabs
            </Link>
            <Link to="components/tooltip" className={styles.menuLink} >
                Tooltip
            </Link>
        </div>
    );
};

export default DocsMenu;