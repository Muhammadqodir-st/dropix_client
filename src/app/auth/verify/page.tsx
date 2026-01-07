import { Suspense } from "react";
import VerifyClient from "../components/VerifyClient";

export default function Verify() {

    return (
        <Suspense fallback={<div>Loading..</div>}>
            <VerifyClient />
        </Suspense>
    )
}