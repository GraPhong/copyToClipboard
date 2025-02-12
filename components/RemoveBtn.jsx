"use client";

import { useState } from "react";
import { HiTrash } from "react-icons/hi";

export default function RemoveBtn({ id, setTopics }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const removeTopic = () => {
        const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
        const updatedTopics = storedTopics.filter((t) => t.id !== id);
        localStorage.setItem("topics", JSON.stringify(updatedTopics));
        setTopics(updatedTopics);
        setShowConfirm(false); 
    };

    return (
        <>
            <button onClick={() => setShowConfirm(true)} className="text-red-400">
                <HiTrash size={24} />
            </button>

            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
                        <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="bg-gray-300 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={removeTopic}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
