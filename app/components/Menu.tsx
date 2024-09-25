import {Link} from "@lib/components/Link/Link.tsx";
import styles from "./Menu.module.scss";

const Menu = () => {
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
            <Link to="components/link" className={styles.menuLink} >
                Link
            </Link>
            <Link to="components/icon" className={styles.menuLink} >
                Icon
            </Link>
            <Link to="components/tooltip" className={styles.menuLink} >
                Tooltip
            </Link>
        </div>
    );
};

export default Menu;