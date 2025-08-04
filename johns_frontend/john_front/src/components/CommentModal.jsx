import React, { useState } from "react";
import LikeIconSvg from "../assets/icons/like-icon.svg";
import DislikeIconSvg from "../assets/icons/dislike-icon.svg";
import CommentIconSvg from "../assets/icons/comment-icon.svg";
import ShareIconSvg from "../assets/icons/share-icon.svg";
import BadgeIconSvg from "../assets/badges/badge-icon.svg";
import StarIconSvg from "../assets/icons/star-icon.svg";
import UserAvatar1 from "../assets/avatars/User Avatar (1).png";
import UserAvatar2 from "../assets/avatars/User Avatar (2).png";

const CommentModal = ({ anecdote, isOpen, onClose }) => {
  const [newComment, setNewComment] = useState("");

  if (!isOpen) return null;

  const mockComments = [
    {
      id: 1,
      user: "John Doe",
      avatar: UserAvatar2,
      time: "1 hour ago",
      text: "Haha, cats are the best! Mine just stares at me until I give him treats.",
      likes: 5,
      dislikes: 0,
    },
    {
      id: 2,
      user: "Sarah Connor",
      avatar: UserAvatar1,
      time: "30 minutes ago",
      text: "Relatable! My dog thinks fetch is just 'me throwing, you watching'.",
      likes: 3,
      dislikes: 0,
    },
    {
      id: 3,
      user: "Alice Wonderland",
      avatar: UserAvatar2,
      time: "10 minutes ago",
      text: "Loved this anecdote! My parrot does something similar every morning.",
      likes: 2,
      dislikes: 0,
    },
    {
      id: 4,
      user: "Bob Builder",
      avatar: UserAvatar1,
      time: "5 minutes ago",
      text: "Great read! Just finished a project, feeling accomplished.",
      likes: 1,
      dislikes: 0,
    },
    {
      id: 5,
      user: "Charlie Chaplin",
      avatar: UserAvatar2,
      time: "1 minute ago",
      text: "This made me laugh so hard! Thanks for sharing.",
      likes: 4,
      dislikes: 0,
    },
  ];

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Handle comment submission logic here
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div
        className="relative bg-gray-50 rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[95vh] overflow-hidden flex flex-col"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 pb-20">
          {/* Original Anecdote */}
          <div
            className="bg-gray-50 rounded-2xl mb-6 overflow-hidden"
            style={{ backgroundColor: "#F9FAFB" }}
          >
            {/* Header avec avatar et informations utilisateur */}
            <div className="p-4 pb-3">
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
            <div className="px-6 pb-3">
              <p className="text-gray-800 text-sm leading-relaxed">
                {anecdote.text}
              </p>
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
                  <span className="text-xs font-medium">
                    {anecdote.dislikes}
                  </span>
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
                  <span className="text-xs font-medium">
                    {anecdote.comments}
                  </span>
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

          {/* Comments Section Header */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Popular Comments
            </h3>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {mockComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-2xl overflow-hidden mx-6"
              >
                {/* Comment Header avec avatar et informations */}
                <div className="p-4 pb-3">
                  <div className="flex items-center space-x-4">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {comment.user}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-xs">
                        <span>{comment.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Content */}
                <div className="px-6 pb-3">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {comment.text}
                  </p>
                </div>

                {/* Comment Actions */}
                <div className="px-6 py-1">
                  <div className="flex items-center space-x-8">
                    <button className="flex items-center space-x-1.5 text-gray-500 hover:text-blue-600 transition-colors group">
                      <div className="relative p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                        <img
                          src={LikeIconSvg}
                          alt="Like"
                          className="w-5 h-5 transition-all filter [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(7%)_saturate(378%)_hue-rotate(169deg)_brightness(96%)_contrast(89%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(25%)_sepia(96%)_saturate(3154%)_hue-rotate(213deg)_brightness(95%)_contrast(101%)]"
                        />
                      </div>
                      <span className="text-xs font-medium">
                        {comment.likes}
                      </span>
                    </button>

                    <button className="flex items-center space-x-1.5 text-gray-500 hover:text-red-600 transition-colors group">
                      <div className="relative p-2 rounded-full group-hover:bg-red-50 transition-colors">
                        <img
                          src={DislikeIconSvg}
                          alt="Dislike"
                          className="w-5 h-5 transition-all filter [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(7%)_saturate(378%)_hue-rotate(169deg)_brightness(96%)_contrast(89%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(23%)_sepia(89%)_saturate(2851%)_hue-rotate(343deg)_brightness(99%)_contrast(94%)]"
                        />
                      </div>
                      <span className="text-xs font-medium">
                        {comment.dislikes}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Input - Fixed at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-2 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-3 items-center">
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm min-h-[40px] max-h-32"
                  rows={1}
                  style={{
                    height: "auto",
                    overflowY:
                      newComment.split("\n").length > 3 ? "scroll" : "hidden",
                  }}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height =
                      Math.min(e.target.scrollHeight, 128) + "px";
                  }}
                />
              </div>
              <button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="relative -top-1 p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex-shrink-0 flex items-center justify-center h-10 w-10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
