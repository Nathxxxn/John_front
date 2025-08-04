import React from "react";
import LikeIconSvg from "../assets/like-icon.svg";
import DislikeIconSvg from "../assets/dislike-icon.svg";
import CommentIconSvg from "../assets/comment-icon.svg";
import ShareIconSvg from "../assets/share-icon.svg";
import BadgeIconSvg from "../assets/badge-icon.svg";
import StarIconSvg from "../assets/star-icon.svg";

const AnecdoteCard = ({ anecdote }) => {
    return (
        <div className="bg-white rounded-lg mb-6 overflow-hidden">
        {/* Header avec avatar et informations utilisateur */}
        <div className="p-6 pb-4">
            <div className="flex items-center space-x-4">
            <img
                src={anecdote.avatar}
                alt={anecdote.user}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
                <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 text-sm">
                    {anecdote.user}
                </h3>
                <img src={BadgeIconSvg} alt="Badge" className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                <img src={StarIconSvg} alt="Level" className="w-4 h-4" />
                <span className="font-medium">Level {anecdote.level}</span>
                <span>|</span>
                <span>{anecdote.time}</span>
                </div>
            </div>
            </div>
        </div>

        {/* Contenu de l'anecdote */}
        <div className="px-6 pb-4">
            <p className="text-gray-800 text-sm leading-relaxed">{anecdote.text}</p>
        </div>

        {/* Actions avec icônes et compteurs */}
        <div className="px-6 py-4">
            <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-1.5 text-gray-500 hover:text-blue-600 transition-colors group">
                <div className="relative p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                <img
                    src={LikeIconSvg}
                    alt="Like"
                    className="w-6 h-6 transition-all"
                    style={{
                    filter:
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)",
                    }}
                    onMouseEnter={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(25%) sepia(96%) saturate(3154%) hue-rotate(213deg) brightness(95%) contrast(101%)";
                    }}
                    onMouseLeave={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)";
                    }}
                />
                </div>
                <span className="text-xs font-medium">{anecdote.likes}</span>
            </button>

            <button className="flex items-center space-x-1.5 text-gray-500 hover:text-red-600 transition-colors group">
                <div className="relative p-2 rounded-full group-hover:bg-red-50 transition-colors">
                <img
                    src={DislikeIconSvg}
                    alt="Dislike"
                    className="w-6 h-6 transition-all"
                    style={{
                    filter:
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)",
                    }}
                    onMouseEnter={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(23%) sepia(89%) saturate(2851%) hue-rotate(343deg) brightness(99%) contrast(94%)";
                    }}
                    onMouseLeave={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)";
                    }}
                />
                </div>
                <span className="text-xs font-medium">{anecdote.dislikes}</span>
            </button>

            <button className="flex items-center space-x-1.5 text-gray-500 hover:text-green-600 transition-colors group">
                <div className="relative p-2 rounded-full group-hover:bg-green-50 transition-colors">
                <img
                    src={CommentIconSvg}
                    alt="Comment"
                    className="w-6 h-6 transition-all"
                    style={{
                    filter:
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)",
                    }}
                    onMouseEnter={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(44%) sepia(78%) saturate(2476%) hue-rotate(92deg) brightness(101%) contrast(107%)";
                    }}
                    onMouseLeave={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)";
                    }}
                />
                </div>
                <span className="text-xs font-medium">{anecdote.comments}</span>
            </button>

            <button className="flex items-center space-x-1.5 text-gray-500 hover:text-purple-600 transition-colors group">
                <div className="relative p-2 rounded-full group-hover:bg-purple-50 transition-colors">
                <img
                    src={ShareIconSvg}
                    alt="Share"
                    className="w-6 h-6 transition-all"
                    style={{
                    filter:
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)",
                    }}
                    onMouseEnter={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(25%) sepia(15%) saturate(2270%) hue-rotate(244deg) brightness(102%) contrast(112%)";
                    }}
                    onMouseLeave={(e) => {
                    e.target.style.filter =
                        "brightness(0) saturate(100%) invert(45%) sepia(7%) saturate(378%) hue-rotate(169deg) brightness(96%) contrast(89%)";
                    }}
                />
                </div>
                <span className="text-xs font-medium">{anecdote.shares}</span>
            </button>
            </div>
        </div>
        </div>
    );
};

export default AnecdoteCard;
