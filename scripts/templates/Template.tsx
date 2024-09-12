import { FC, ReactNode } from 'react';
import css from './Template.module.scss';

export type TemplateProps = {
    children: ReactNode;
};

export const Template: FC<TemplateProps> = ({ children }) => (
    <div className={css.template} data-testid="wk-template">
        Template {children}
    </div>
);