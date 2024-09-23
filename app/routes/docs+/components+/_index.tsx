import { redirect } from "@remix-run/node";

export const loader = () => {
    return redirect("/docs/components/button");
};

export default function ComponentsIndex() {
    return null;
}