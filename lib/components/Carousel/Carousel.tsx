import { FC, ReactNode } from 'react';
import styles from './Carousel.module.scss';

export type CarouselProps = {
    children: ReactNode;
};

export const Carousel: FC<CarouselProps> = ({ children }) => (
    <div className={styles.carousel} data-testid="wk-carousel">
        Carousel {children}
    </div>
);