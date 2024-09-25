import {Link} from "@lib/components/Link/Link.tsx";

const LinkDocs = () => {
    return (
        <div>
            <h2>Link</h2>
            <Link to="#" >
                Link
            </Link>
            <Link to="notActive" >
                Link not active
            </Link>
        </div>
    );
}

export default LinkDocs;