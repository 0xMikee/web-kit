import {Button, ButtonColor, ButtonSize, ButtonVariant} from "@lib/components/Button/Button.tsx";
import styles from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "remix-themes";
import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import {ActionIconId} from "@lib/components/Icons/ActionIconId.tsx";

const ThemeSwitcher = () => {
	const [theme, setTheme, { definedBy }] = useTheme();

	const toggleTheme = () => {
		setTheme((prevTheme: Theme | null) => {
			if (definedBy === "SYSTEM") {
				return Theme.LIGHT;
			}

			switch (prevTheme) {
				case Theme.LIGHT:
					return Theme.DARK;
				case Theme.DARK:
					return null;
				default:
					return Theme.LIGHT;
			}
		});
	};

	const getIconId = (theme: Theme | null): ActionIconId => {

		if (definedBy === "SYSTEM") {
			return ActionIconId.SYSTEM
		}

		switch (theme) {
			case Theme.DARK:
				return ActionIconId.MOON;
			case Theme.LIGHT:
				return ActionIconId.SUN;
			default:
				return ActionIconId.SYSTEM;
		}
	};

	return (
		<Button
			isIconOnly={true}
			size={ButtonSize.SMALL}
			variant={ButtonVariant.FADED}
			color={ButtonColor.PRIMARY}
			className={styles.button}
			onClick={toggleTheme}
		>
			<Icon id={getIconId(theme)} size={IconSize.SIZE_20} />
		</Button>
	);
};

export default ThemeSwitcher;
