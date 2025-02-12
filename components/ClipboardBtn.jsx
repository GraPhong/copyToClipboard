"use client";

import { useState } from "react";
import { HiDuplicate } from "react-icons/hi";

export default function ClipboardBtn({ id }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        
        const topic = storedTopics.find((t) => String(t.id) === String(id))?.topic;

        if (topic) {
            await navigator.clipboard.writeText(topic);
            setCopied(true);

            setTimeout(() => setCopied(false), 1000);
        }
    };

    return (
        <button onClick={copyToClipboard} className="text-white flex items-center gap-2">
            <HiDuplicate size={24} color="white"/>
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}
