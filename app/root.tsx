import {
    Links,
    Meta,
    Outlet,
    Scripts, ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import type {MetaFunction, LinksFunction, LoaderFunction} from "@remix-run/node";
import {rootLinks} from "./utils/rootLinks.ts";
import {themeSessionResolver} from "./sessions.server.tsx";
import {PreventFlashOnWrongTheme, ThemeProvider, useTheme} from "remix-themes";
import "./styles/global.scss";
import Header from "@app/components/Header.tsx";

export const meta: MetaFunction = () => {

    return [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
};

export const links: LinksFunction = () => {
    return [...rootLinks];
};

export const loader: LoaderFunction = async ({request}) => {
    const {getTheme} = await themeSessionResolver(request)

    return {
        theme: getTheme(),
    }
}

const App = () => {
    const data = useLoaderData<typeof loader>()
    const [theme] = useTheme()

    return (
        <html lang="en" className={theme ?? ''}>
        <head>
            <Meta />
            <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
            <Links />
            <title>WebKit</title>
        </head>
        <body>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}

const AppWithProviders = () => {
    const data = useLoaderData<typeof loader>()
    return (
        <ThemeProvider
            specifiedTheme={data.theme}
            themeAction="/action/set-theme"
            disableTransitionOnThemeChange={true}
        >
            <App />
        </ThemeProvider>
    )
}

export default AppWithProviders