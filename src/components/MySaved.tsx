import { SaveProp } from "@/types/save";
import Link from "next/link";
import MySavedImage from "./MySavedImage";

export default function MySaved({ item }: { item: SaveProp }) {

    return (
        <div className="aspect-square border relative">
            <Link href={'/profile/saved'}>
                <MySavedImage item={item} />
            </Link>
        </div>
    )
}