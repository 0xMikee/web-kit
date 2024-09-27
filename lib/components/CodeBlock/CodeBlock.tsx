import {FC} from 'react';
import {Highlight, type Language, type PrismTheme, themes} from "prism-react-renderer";
import classNames from 'classnames';
import styles from './CodeBlock.module.scss';
import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import {ActionIconId} from "@lib/components/Icons/ActionIconId.tsx";

export enum CodeBlockTheme {
    vsDark = 'vsDark',
    vsLight = 'vsLight',
    oneDark = 'oneDark',
    oneLight = 'oneLight',
    github = 'github',
}

export type CodeBlockProps = {
    code: string;
    language?: Language;
    theme?: CodeBlockTheme;
    className?: string;
    withCopy?: boolean;
    customStyles?: PrismTheme['plain'];
    inlineCode?: boolean;
};

export const CodeBlock: FC<CodeBlockProps> = ({
    code,
    language = "tsx",
    theme,
    className,
    withCopy,
    customStyles,
    inlineCode,
}) => {
    const copyText = () => {
        navigator.clipboard.writeText(code).then(() => console.log("Copied:", code))
    }

    const getTheme = (themeName?: CodeBlockTheme): PrismTheme => {
        switch (themeName) {
            case CodeBlockTheme.vsDark:
                return themes.vsDark;
            case CodeBlockTheme.oneDark:
                return themes.oneDark;
            default:
                return themes.vsDark;
        }
    };

    const selectedTheme = getTheme(theme);

    const customTheme = {
        ...selectedTheme,
        plain: {
            ...selectedTheme.plain,
            lineHeight: "24px",
            ...customStyles,
        },
    };

    return (
        <>
            <Highlight
                code={code.trim()}
                language={language}
                theme={customTheme}
            >
                {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
                    <div className={classNames(className, styles.codeBlock, inlineCode && styles.inlineCode)}>
                        <pre
                            className={classNames(styles.pre, preClassName)}
                            style={style}
                        >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                        {withCopy && <Icon className={styles.copyButton} onClick={copyText} id={ActionIconId.COPY} size={IconSize.SIZE_14} />}
                    </div>
                )}
            </Highlight>
        </>
    );
};
