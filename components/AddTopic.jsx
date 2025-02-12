"use client";

import { useState } from "react";

export default function AddTopic({ setTopics }) {
    const [topic, setTopic] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!topic.trim()) {
            alert("Topic is required.");
            return;
        }

        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        const newTopic = { id: Date.now().toString(), topic };

        // Add the new topic to the list and update localStorage
        const updatedTopics = [...storedTopics, newTopic];
        localStorage.setItem("topics", JSON.stringify(updatedTopics));

        // Update the state without reloading the page
        setTopics(updatedTopics);
        setTopic("");  // Reset the input field
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
