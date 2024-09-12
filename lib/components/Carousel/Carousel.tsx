import { FC, ReactNode } from 'react';
import css from './Carousel.module.scss';

export type CarouselProps = {
    children: ReactNode;
};

export const Carousel: FC<CarouselProps> = ({ children }) => (
    <div className={css.carousel} data-testid="wk-carousel">
        Carousel {children}
    </div>
);