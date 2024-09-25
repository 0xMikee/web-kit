import { Svg, SvgProps } from '../../helpers/Svg.tsx';
import { Path } from '../../helpers/Path.tsx';

export enum ActionIconId {
    COPY = 'action-icon-copy',
    MOON = 'action-icon-moon',
    SUN = 'action-icon-sun',
    SYSTEM = 'action-icon-system',
}

export type ActionIconProps = SvgProps & {
    id: ActionIconId;
};

const getActionIconPath = (id: ActionIconId) => {
    switch (id) {
        case ActionIconId.COPY:
            return (
                <Path d="M23.942 7.962a.8.8 0 0 0-.162-.242l-7.5-7.5a.76.76 0 0 0-.53-.22h-6A3.75 3.75 0 0 0 6 3.75v.75H3.75A3.75 3.75 0 0 0 0 8.25v12A3.75 3.75 0 0 0 3.75 24h10.5A3.75 3.75 0 0 0 18 20.25v-.75h2.25A3.75 3.75 0 0 0 24 15.75v-7.5a.8.8 0 0 0-.058-.288M16.5 2.56l4.94 4.94h-2.69a2.25 2.25 0 0 1-2.25-2.25Zm0 17.69a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 3.75 6H6v9.75a3.75 3.75 0 0 0 3.75 3.75h6.75ZM20.25 18H9.75a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 9.75 1.5H15v3.75A3.75 3.75 0 0 0 18.75 9h3.75v6.75A2.25 2.25 0 0 1 20.25 18" />
            );

        case ActionIconId.MOON:
            return (
                <Path d="M11.59 1.617a.75.75 0 0 1-.047.836 7.84 7.84 0 0 0-1.585 4.75c0 4.294 3.388 7.74 7.527 7.74 1.141 0 2.221-.26 3.19-.726a.75.75 0 0 1 1.027.94c-1.45 3.847-5.1 6.593-9.39 6.593-5.575 0-10.062-4.63-10.062-10.301 0-5.16 3.713-9.456 8.583-10.19a.75.75 0 0 1 .756.358m-2.237 1.57C6.091 4.423 3.75 7.647 3.75 11.45c0 4.879 3.851 8.801 8.562 8.801 3.015 0 5.676-1.604 7.203-4.04a9 9 0 0 1-2.03.234c-5.003 0-9.027-4.155-9.027-9.24a9.4 9.4 0 0 1 .895-4.017" />
            );

        case ActionIconId.SUN:
            return (
                <Path d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m0 18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m0-11.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M2 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm18 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM3.97 3.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m13.5 13.5a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m-13.5 1.5a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 1 0-1.06-1.06zm13.5-13.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0-1.06-1.06z" />
            );

        case ActionIconId.SYSTEM:
            return (
                <Path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z" />
            );

        default:
            throw new Error(`Unknown ActionIconId: ${id}`);
    }
};

export const ActionIcon = ({ id, ...svgProps }: ActionIconProps) => (
    <Svg {...svgProps} viewBox="0 0 24 24" fill="currentColor" data-testid={`wcl-icon-${id}`}>
        {getActionIconPath(id)}
    </Svg>
);
