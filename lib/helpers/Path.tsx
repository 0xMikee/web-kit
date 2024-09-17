import { FC, SVGProps } from 'react';

export type PathProps = SVGProps<SVGPathElement>;

export const Path: FC<PathProps> = props => <path fillRule="evenodd" {...props} />;
