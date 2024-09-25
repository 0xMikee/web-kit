import {Outlet} from "@remix-run/react";
import {Code} from "@lib/components/Code/Code.tsx";

const Index = () => {
    return (
        <div>
            <Code withCopy>npm install @0xmike/web-kit</Code>
            <Outlet />
        </div>
    );
}

export default Index;