import {Link} from "@lib/components/Link/Link.tsx";
import styles from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.sectionTitle}>Components</div>
            <Link to="components/button" >
                Button
            </Link>
            <Link to="components/link" >
                Link
            </Link>
            <Link to="components/tooltip" >
                Tooltip
            </Link>
        </div>
    );
};

export default Menu;