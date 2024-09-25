import {Outlet} from "@remix-run/react";
import DocsLayout from "@app/components/DocsLayout";
import DocsMenu from "@app/components/DocsMenu.tsx";

const Layout = () => {
    return (
        <DocsLayout>
            <DocsMenu />
            <Outlet />
        </DocsLayout>
    );
};

export default Layout;