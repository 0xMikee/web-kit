import styles from "./Layout.module.scss";
import type { ReactNode } from "react";

export type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<main className={styles.main}>
			<div className={styles.content}>{children}</div>
		</main>
	);
};

export default Layout;
