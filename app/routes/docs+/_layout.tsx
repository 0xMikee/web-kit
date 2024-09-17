import {Link, Outlet} from "@remix-run/react";
import DocsLayout from "@app/components/DocsLayout";

const Layout = () => {
    return (
        <DocsLayout>
            <div>
                <Link to="button" >
                    Button
                </Link>
                <Link to="tooltip" >
                    Tooltip
                </Link>
            </div>
            <Outlet />
        </DocsLayout>
    );
};

export default Layout;