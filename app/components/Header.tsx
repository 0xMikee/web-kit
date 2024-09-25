import styles from "./Header.module.scss";
import ThemeSwitcher from "@app/components/ThemeSwitcher.tsx";
import {Link} from "@lib/components/Link/Link.tsx";
import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import {SocialIconId} from "@lib/components/Icons/SocialIconId.tsx";
import {Button, ButtonColor, ButtonSize, ButtonVariant} from "@lib/components/Button/Button.tsx";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.headerStart}>
				<Link to="/" className={styles.logo}>
					<div className={styles.logoText}>Web</div>
					<div className={styles.logoText}>Kit</div>
				</Link>
				<nav className={styles.navbar}>
					<Link to="/docs">
						Docs
					</Link>
					<Link to="/docs/components/" customActivePath="/docs/components">
						Components
					</Link>
				</nav>
				</div>
				<div className={styles.buttons}>
					<a
						href="https://github.com/0xMikee/web-kit"
						target="_blank"
						rel="noreferrer"
					>
						<Button size={ButtonSize.SMALL} variant={ButtonVariant.BORDERED} color={ButtonColor.PRIMARY} isIconOnly>
							<Icon id={SocialIconId.GITHUB} size={IconSize.SIZE_20} />
						</Button>
					</a>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
};

export default Header;
