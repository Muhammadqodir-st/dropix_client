"use client";

import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";
import { useEffect, useRef } from "react";

interface EmojiPickerProp {
    onSelect: (emoji: { native: string }) => void
};

export default function EmojiPicker({ onSelect }: EmojiPickerProp) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        new Picker({
            data,
            onEmojiSelect: onSelect,
            ref,
        });
    }, []);

    return <div ref={ref} />;
}
