import {FC} from 'react';
import {Highlight, type Language, PrismTheme, themes} from "prism-react-renderer";
import classNames from 'classnames';
import styles from './CodeBlock.module.scss';
import {Icon, IconSize} from "@lib/components/Icons/Icon/Icon.tsx";
import {ActionIconId} from "@lib/components/Icons/ActionIconId.tsx";

export enum CodeBlockTheme {
    vsDark = 'vsDark',
    oneDark = 'oneDark',
}

export type CodeBlockProps = {
    code: string;
    language: Language;
    theme?: CodeBlockTheme;
    className?: string;
    withCopy?: boolean;
    customBgColor?: string;
    inlineCode?: boolean;
};

export const CodeBlock: FC<CodeBlockProps> = ({
    code,
    language,
    theme,
    className,
    withCopy,
    customBgColor,
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
            ...(customBgColor && { backgroundColor: customBgColor, color: "white" }),
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
                    <pre
                        className={classNames(styles.pre, inlineCode && styles.inlineCode, className, preClassName)}
                        style={style}
                    >
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                        {withCopy && <Icon className={styles.copyButton} onClick={copyText} id={ActionIconId.COPY} size={IconSize.SIZE_14} />}
                    </pre>
                )}
            </Highlight>
        </>
    );
};
