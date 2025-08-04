import React, { useState } from "react";

const categories = [
  "All",
  "Humor",
  "Life Lessons",
  "Travel",
  "Work",
  "Family",
  "Random",
];

const mockAnecdotes = [
  {
    title: "The Day I Met a Talking Parrot",
    excerpt:
      "A hilarious encounter with a surprisingly articulate parrot at a local pet store...",
    user: "John Doe",
    time: "2 hours ago",
    category: "All",
  },
  {
    title: "Lost in Translation: My Trip to Tokyo",
    excerpt:
      "Navigating the bustling streets of Tokyo with only a phrasebook and a lot of hope...",
    user: "Jane Smith",
    time: "Yesterday",
    category: "Travel",
  },
  {
    title: "The Unexpected Mentor",
    excerpt:
      "How a chance encounter with an old man changed my perspective on career and life...",
    user: "Alex Lee",
    time: "3 days ago",
    category: "Life Lessons",
  },
  {
    title: "My First Attempt at Baking Sourdough",
    excerpt:
      "A messy but ultimately rewarding journey into the world of artisanal bread making...",
    user: "Emily White",
    time: "1 week ago",
    category: "Work",
  },
  {
    title: "The Great Office Coffee Machine Heist",
    excerpt:
      "A comical tale of corporate espionage involving a broken coffee machine and desperate colleagues...",
    user: "Chris Green",
    time: "2 weeks ago",
    category: "Humor",
  },
  {
    title: "A Serendipitous Encounter on a Rainy Day",
    excerpt:
      "How a simple act of kindness during a downpour led to a lasting friendship...",
    user: "Sarah Brown",
    time: "3 weeks ago",
    category: "Random",
  },
];

const Explore = () => {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? mockAnecdotes
      : mockAnecdotes.filter((a) => a.category === selected);

  return (
    <div className="w-full mx-auto p-6 bg-gray-50 min-h-screen space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Explore Anecdotes
      </h2>
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full font-medium transition-colors ${
              selected === cat
                ? "bg-purple-600 text-white"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((a, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {a.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">{a.excerpt}</p>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">By {a.user}</span>
              <span className="text-gray-500 text-xs">{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
