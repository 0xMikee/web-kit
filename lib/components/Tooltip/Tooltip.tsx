import classNames from "classnames";
import { type FC, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.scss";

export type TooltipProps = {
	children: ReactNode;
	content: ReactNode;
	disable?: boolean;
	className?: string;
	contentClassName?: string;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	delay?: number;
	endDelay?: number;
	offset?: number;
};

export const Tooltip: FC<TooltipProps> = ({
	children,
	content,
	disable = false,
	className,
	contentClassName,
	side = "bottom",
	align = "center",
	delay = 0,
	endDelay = 0,
	offset = 0,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (enterTimeoutRef.current) {
				clearTimeout(enterTimeoutRef.current);
			}
			if (leaveTimeoutRef.current) {
				clearTimeout(leaveTimeoutRef.current);
			}
		};
	}, []);

	const handleMouseEnter = () => {
		if (leaveTimeoutRef.current) {
			clearTimeout(leaveTimeoutRef.current);
		}
		enterTimeoutRef.current = setTimeout(() => {
			setIsOpen(true);
		}, delay);
	};

	const handleMouseLeave = () => {
		if (enterTimeoutRef.current) {
			clearTimeout(enterTimeoutRef.current);
		}
		leaveTimeoutRef.current = setTimeout(() => {
			setIsOpen(false);
		}, endDelay);
	};

	const tooltipStyles = {
		marginTop: side === "top" ? -offset : offset,
		marginBottom: side === "bottom" ? offset : -offset,
		marginLeft: side === "left" ? -offset : offset,
		marginRight: side === "right" ? offset : -offset,
	};

	return (
		<div className={classNames(styles.tooltipWrapper, className)}>
			<div
				className={styles.trigger}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{children}
			</div>
			{!disable && isOpen && (
				<div
					className={classNames(
						styles.tooltipContent,
						contentClassName,
						styles[`side-${side}`],
						styles[`align-${align}`],
						{ [styles.disabled]: disable },
					)}
					style={tooltipStyles}
				>
					{content}
				</div>
			)}
		</div>
	);
};