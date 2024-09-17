import {Link, Outlet} from "@remix-run/react";

const DocsLayout = () => {
    return (
        <div>
            Layout
            <Link to="button" >
                Button
            </Link>
            <Link to="tooltip" >
                Tooltip
            </Link>
            <Outlet />
        </div>
    );
};

export default DocsLayout;