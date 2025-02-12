"use client";

import { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import ClipboardBtn from "./ClipboardBtn";
import { HiPencilAlt } from "react-icons/hi";
import EditTopicForm from "./EditTopicForm";

export default function TopicsList() {
    const [topics, setTopics] = useState([]);
    const [editTopicId, setEditTopicId] = useState(null); // Track the topic being edited

    useEffect(() => {
        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        setTopics(storedTopics);
    }, []);

    return (
        <>
            {topics.map((t) => (
                <div
                    key={t.id}
                    className="rounded-lg p-4 border border-slate-300 my-4 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{t.topic}</h2>
                    </div>

                    <div className="flex gap-2">
                        <ClipboardBtn id={t.id} />
                        <button onClick={() => setEditTopicId(t.id)}>
                            <HiPencilAlt size={24} />
                        </button>
                        <RemoveBtn id={t.id} setTopics={setTopics} />
                    </div>
                </div>
            ))}

            {/* Show Edit Modal if an editTopicId is selected */}
            {editTopicId && (
                <EditTopicForm id={editTopicId} closeModal={() => setEditTopicId(null)} />
            )}
        </>
    );
}
