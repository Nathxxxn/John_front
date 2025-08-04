import React from "react";
import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/exit-arrow-icon.svg";
import TipsIcon from "../assets/icons/tips-icon.svg";
import InspoIcon from "../assets/icons/inspo-icon-v.svg";
import RefineIcon from "../assets/icons/refine-icon.svg";
import CheckIcon from "../assets/icons/check-icon.svg";

const AnecdoteTips = () => {
  const gettingStarted = [
    "Choose a memorable moment or a specific event that stands out.",
    "Identify the core message or the point you want to convey.",
    "Keep it brief and focused on a single idea to maintain impact.",
  ];
  const crafting = [
    "Use vivid descriptions and sensory details to bring your story to life.",
    "Show, don't just tell: describe actions and reactions rather than stating emotions.",
    "Build to a punchline, a surprising twist, or a meaningful insight.",
    "Incorporate dialogue if it adds authenticity and moves the story forward.",
  ];
  const refining = [
    "Read your anecdote aloud to catch awkward phrasing or unnatural flow.",
    "Check for clarity and ensure your message is easily understood.",
    "Remove any unnecessary words or sentences that don't contribute to the story.",
    "Consider getting feedback from a friend or another user for fresh perspectives.",
  ];

  return (
    <div className="w-full h-full p-6 bg-gray-50 min-h-screen pb-12 space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <Link to="/create" className="text-gray-700 hover:text-gray-900">
          <img src={BackIcon} alt="Back" className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-800">
          Anecdote Writing Tips
        </h1>
      </div>

      <div className="space-y-6">
        {/* Getting Started */}
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <img src={TipsIcon} alt="Getting Started" className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Getting Started
            </h2>
          </div>
          <ul className="space-y-2">
            {gettingStarted.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <img src={CheckIcon} alt="Check" className="w-3 h-3" />
                </div>
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Crafting Your Story */}
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <img
                src={InspoIcon}
                alt="Crafting Your Story"
                className="w-4 h-4"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Crafting Your Story
            </h2>
          </div>
          <ul className="space-y-2">
            {crafting.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <img src={CheckIcon} alt="Check" className="w-3 h-3" />
                </div>
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Refining Your Anecdote */}
        <div className="bg-white p-6 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <img
                src={RefineIcon}
                alt="Refining Your Anecdote"
                className="w-4 h-4"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Refining Your Anecdote
            </h2>
          </div>
          <ul className="space-y-2">
            {refining.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <img src={CheckIcon} alt="Check" className="w-3 h-3" />
                </div>
                <span className="text-gray-800 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnecdoteTips;
