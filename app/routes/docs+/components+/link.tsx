import {Link} from "@lib/components/Link/Link.tsx";
import Tabs, {Tab} from "@lib/components/Tabs/Tabs.tsx";

const LinkDocs = () => {
    return (
        <div>
            <h2>Link</h2>
            <Tabs>
                <Tab label="Preview">
                    <Link to="#" >
                        Link
                    </Link>
                    <Link to="/" >
                        Link not active
                    </Link>
                </Tab>
                <Tab label="Code">
                    Code wip
                </Tab>
            </Tabs>
        </div>
    );
}

export default LinkDocs;