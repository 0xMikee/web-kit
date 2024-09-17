import { FC, ReactNode } from 'react';
import styles from './Template.module.scss';

export type TemplateProps = {
    children: ReactNode;
};

export const Template: FC<TemplateProps> = ({ children }) => (
    <div className={styles.template} data-testid="wk-template">
        Template {children}
    </div>
);