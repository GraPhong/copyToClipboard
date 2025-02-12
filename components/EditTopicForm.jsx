"use client";

import { useState, useEffect } from "react";

export default function EditTopicForm({ id, closeModal }) {
    const [newTopic, setNewTopic] = useState("");

    useEffect(() => {
        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        const existingTopic = storedTopics.find((t) => String(t.id) === String(id));
        if (existingTopic) {
            setNewTopic(existingTopic.topic);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        storedTopics = storedTopics.map((t) =>
            String(t.id) === String(id) ? { ...t, topic: newTopic } : t
        );
        localStorage.setItem("topics", JSON.stringify(storedTopics));

        closeModal(); 
        window.location.reload();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-[700px]">
                <h2 className="text-lg font-bold mb-4">Edit Topic</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setNewTopic(e.target.value)}
                        value={newTopic}
                        className="rounded-lg border border-slate-500 px-8 py-2 flex-grow"
                        type="text"
                        placeholder="Topic Title"
                    />
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 font-bold text-white py-2 px-4 rounded"
                        >
                            Update Topic
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
