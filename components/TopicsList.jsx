"use client";

import { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import ClipboardBtn from "./ClipboardBtn";
import EditTopicBtn from "./EditTopicBtn";
import AddTopic from "./AddTopic"; 

export default function TopicsList() {
    const [topics, setTopics] = useState([]);
    const [editTopic, setEditTopic] = useState([]); 

    useEffect(() => {
        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        setTopics(storedTopics);
    }, []);

    return (
        <>
            <AddTopic setTopics={setTopics} />  

            {topics.map((t) => (
                <div
                    key={t.id}
                    className="rounded-lg p-4 border border-slate-300 my-4 flex justify-between gap-5 items-start bg-gray-800"
                >
                    <div>
                        <h2 className="font-bold text-2xl text-white">{t.topic}</h2>
                    </div>

                    <div className="flex gap-2">
                        <ClipboardBtn id={t.id} />
                        <EditTopicBtn id={t.id} editTopic={setEditTopic} />
                        <RemoveBtn id={t.id} setTopics={setTopics} />
                    </div>
                </div>
            ))}
        </>
    );
}
