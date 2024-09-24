import {Link} from "@lib/components/Link/Link.tsx";

const LinkDocs = () => {
    return (
        <div>
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