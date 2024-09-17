import { SVGProps } from 'react';

export type SvgProps = {
  title?: string;
} & SVGProps<SVGSVGElement>;

export const Svg = ({ title, children, ...props }: SvgProps) => (
  <svg {...props}>
    {title && <title>{title}</title>}
    {children}
  </svg>
);
