import React from 'react'
import { useState } from 'react';

const CreateAnecdoteForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-2xl mx-auto mt-6">
        <h2 className="text-xl font-semibold mb-4">Share Your Anecdote</h2>
        <input
        type="text"
        placeholder="Title (Optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-md p-2 mb-4"
        />
        <textarea
        placeholder="What's your story today?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded-md p-2 h-32"
        />
        <div className="text-right mt-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md">
            Post Anecdote
        </button>
        </div>
    </div>
    );
}

export default CreateAnecdoteForm