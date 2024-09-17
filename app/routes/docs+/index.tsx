import {Outlet} from "@remix-run/react";

const Index = () => {
    return (
        <div>
            Docs
            <Outlet />
        </div>
    );
}

export default Index;