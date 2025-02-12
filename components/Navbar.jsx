"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [topic, setTopic] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!topic.trim()) {
            alert("Topic is required.");
            return;
        }

        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];

        const newTopic = { id: Date.now().toString(), topic };


        localStorage.setItem("topics", JSON.stringify([...storedTopics, newTopic]));

        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-row gap-2">
                <input
                    onChange={(e) => setTopic(e.target.value)}
                    value={topic}
                    className="rounded-lg border border-slate-500 px-8 py-2 flex-grow"
                    type="text"
                    placeholder="Topic Title"
                />

                <button type="submit" className="rounded-lg bg-green-500 font-bold text-white py-3 px-6 w-fit">
                    Add Topic
                </button>
            </form>
        </div>
    );
}
