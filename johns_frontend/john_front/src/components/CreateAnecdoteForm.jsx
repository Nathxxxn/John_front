import React from "react";
import { useState } from "react";
import TipsIcon from "../assets/icons/tips-icon.svg";
import CheckIcon from "../assets/icons/check-icon.svg";
import InspoIcon from "../assets/icons/inspo-icon.svg";

const CreateAnecdoteForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const tips = [
        "Start with a hook to grab attention.",
        "Keep it concise and to the point.",
        "Focus on a single event or idea.",
        "Add a personal touch or reflection.",
        "Proofread for clarity and impact.",
    ];

    return (
        <div className="w-full h-full p-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main form section */}
            <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Share Your Anecdote
                </h1>

                <div className="space-y-6">
                    <div>
                    <input
                        type="text"
                        placeholder="Title (Optional)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-gray-50"
                    />
                    </div>

                    <div>
                    <textarea
                        placeholder="What's your story today?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full rounded-lg p-4 h-48 text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none bg-gray-50"
                    />
                    </div>

                    <div className="flex justify-end">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-colors cursor-pointer">
                        Post Anecdote
                    </button>
                    </div>
                </div>
                </div>
            </div>

            {/* Sidebar with tips and inspiration */}
            <div className="space-y-6">
                {/* Writing Tips */}
                <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <img src={TipsIcon} alt="Tips" className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                    Anecdote Writing Tips
                    </h3>
                </div>

                <ul className="space-y-3">
                    {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <img src={CheckIcon} alt="Check" className="w-3 h-3" />
                        </div>
                        <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                    ))}
                </ul>

                <button className="mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer">
                    View More Tips
                </button>
                </div>

                {/* Need Inspiration */}
                <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mr-3">
                    <img src={InspoIcon} alt="Inspiration" className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                    Need Inspiration?
                    </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                    Explore popular anecdotes from the community to spark your
                    creativity.
                </p>

                <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer">
                    Explore Anecdotes
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CreateAnecdoteForm;
