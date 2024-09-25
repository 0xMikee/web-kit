import styles from "./Tabs.module.scss"
import {Children, FC, ReactElement, ReactNode, useState} from 'react';
import classNames from "classnames";

interface TabProps {
    label: string;
    children: ReactNode;
}

export const Tab: FC<TabProps> = ({ children }) => {
    return <div>{children}</div>;
};

interface TabsProps {
    children: ReactElement<typeof Tab>[];
}

const Tabs: FC<TabsProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = Children.toArray(children) as ReactElement<TabProps>[];

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.tabs}>
            <ul className={styles.header}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={classNames(styles.label, index === activeIndex && styles.active)}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.props.label}
                    </li>
                ))}
            </ul>
            <div className={styles.content}>{children[activeIndex]}</div>
        </div>
    );
};

export default Tabs;