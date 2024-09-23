import {Outlet} from "@remix-run/react";
import DocsLayout from "@app/components/DocsLayout";
import Menu from "@app/components/Menu.tsx";

const Layout = () => {
    return (
        <DocsLayout>
            <Menu />
            <Outlet />
        </DocsLayout>
    );
};

export default Layout;