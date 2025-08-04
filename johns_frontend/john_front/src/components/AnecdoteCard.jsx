import React, { useState } from "react";
import LikeIconSvg from "../assets/icons/like-icon.svg";
import DislikeIconSvg from "../assets/icons/dislike-icon.svg";
import CommentIconSvg from "../assets/icons/comment-icon.svg";
import ShareIconSvg from "../assets/icons/share-icon.svg";
import BadgeIconSvg from "../assets/badges/badge-icon.svg";
import StarIconSvg from "../assets/icons/star-icon.svg";
import CommentModal from "./CommentModal";

const AnecdoteCard = ({ anecdote }) => {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const handleCommentClick = () => {
    setIsCommentModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCommentModalOpen(false);
  };
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
                className="w-6 h-6 transition-all filter [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(7%)_saturate(378%)_hue-rotate(169deg)_brightness(96%)_contrast(89%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(25%)_sepia(96%)_saturate(3154%)_hue-rotate(213deg)_brightness(95%)_contrast(101%)]"
              />
            </div>
            <span className="text-xs font-medium">{anecdote.likes}</span>
          </button>

          <button className="flex items-center space-x-1.5 text-gray-500 hover:text-red-600 transition-colors group">
            <div className="relative p-2 rounded-full group-hover:bg-red-50 transition-colors">
              <img
                src={DislikeIconSvg}
                alt="Dislike"
                className="w-6 h-6 transition-all filter [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(7%)_saturate(378%)_hue-rotate(169deg)_brightness(96%)_contrast(89%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(23%)_sepia(89%)_saturate(2851%)_hue-rotate(343deg)_brightness(99%)_contrast(94%)]"
              />
            </div>
            <span className="text-xs font-medium">{anecdote.dislikes}</span>
          </button>

          <button
            onClick={handleCommentClick}
            className="flex items-center space-x-1.5 text-gray-500 hover:text-green-600 transition-colors group"
          >
            <div className="relative p-2 rounded-full group-hover:bg-green-50 transition-colors">
              <img
                src={CommentIconSvg}
                alt="Comment"
                className="w-6 h-6 transition-all filter [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(7%)_saturate(378%)_hue-rotate(169deg)_brightness(96%)_contrast(89%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(44%)_sepia(78%)_saturate(2476%)_hue-rotate(92deg)_brightness(101%)_contrast(107%)]"
              />
            </div>
            <span className="text-xs font-medium">{anecdote.comments}</span>
          </button>

          <button className="flex items-center space-x-1.5 text-gray-500 hover:text-purple-600 transition-colors group">
            <div className="relative p-2 rounded-full group-hover:bg-purple-50 transition-colors">
              <img
                src={ShareIconSvg}
                alt="Share"
                className="w-6 h-6 transition-all filter [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(7%)_saturate(378%)_hue-rotate(169deg)_brightness(96%)_contrast(89%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(25%)_sepia(15%)_saturate(2270%)_hue-rotate(244deg)_brightness(102%)_contrast(112%)]"
              />
            </div>
            <span className="text-xs font-medium">{anecdote.shares}</span>
          </button>
        </div>
      </div>

      {/* Comment Modal */}
      <CommentModal
        anecdote={anecdote}
        isOpen={isCommentModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AnecdoteCard;
