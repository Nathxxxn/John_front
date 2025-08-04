import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIconSvg from "../assets/icons/home-icon-fixed.svg";
import FeedIconSvg from "../assets/icons/feed-icon.svg";
import ProfileIconSvg from "../assets/icons/profile-icon.svg";
import NotificationIconSvg from "../assets/icons/notif-icon.svg";
import LogoSvg from "../assets/brand/logo.svg";
import ChallengeIconSvg from "../assets/icons/challenge-icon.svg";
import LevelIconSvg from "../assets/icons/level-icon.svg";
import ProgressBarImg from "../assets/progress/progress-bar.png";

const navigationItems = [
  {
    path: "/",
    label: "Home",
    icon: HomeIconSvg,
  },
  {
    path: "/feed",
    label: "Feed",
    icon: FeedIconSvg,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: ProfileIconSvg,
  },
  {
    path: "/notifications",
    label: "Notifications",
    icon: NotificationIconSvg,
  },
];

const PlusIcon = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      d="M10 4.16667V15.8333M4.16667 10H15.8333"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside
      className="w-64 h-full flex flex-col justify-between border-r border-gray-250"
      style={{ backgroundColor: "#F3F4F6", borderRightColor: "#E5E7EB" }}
    >
      <div>
        <div className="p-4 flex items-center space-x-3">
          <img
            src={LogoSvg}
            alt="Logo"
            className="w-6 h-6"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(7499%) hue-rotate(276deg) brightness(100%) contrast(100%)",
            }}
          />
          <h2
            className="pl-1 text-xl font-semibold"
            style={{ color: "#6B7280" }}
          >
            John's Life
          </h2>
        </div>
        <nav className="flex flex-col px-4 space-y-2">
          {navigationItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`p-3 rounded-md flex items-center space-x-3 transition-colors ${
                  active ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`}
                style={{ color: active ? "white" : "#6B7280" }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 flex-shrink-0 object-contain"
                  style={{
                    opacity: active ? 1 : 0.7,
                    filter: active ? "brightness(0) invert(1)" : "none",
                  }}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Daily Challenge + Account Level */}
        <div className="px-4 py-2 space-y-8 mt-6">
          {/* Daily Challenges */}
          <div
            className="bg-white rounded-lg p-4 mx-auto"
            style={{ width: "224px", height: "99px" }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <img
                src={ChallengeIconSvg}
                alt="Challenge"
                className="w-5 h-5"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(7499%) hue-rotate(276deg) brightness(100%) contrast(100%)",
                }}
              />
              <p className="text-sm font-semibold" style={{ color: "#1F2937" }}>
                Daily Challenges
              </p>
            </div>
            <div className="mb-2">
              <img
                src={ProgressBarImg}
                alt="Progress"
                className="w-full h-2 object-cover"
              />
            </div>
            <p className="text-xs" style={{ color: "#6B7280" }}>
              Next task: Share an anecdote
            </p>
          </div>

          {/* Account Level */}
          <div
            className="bg-white rounded-lg p-4 mx-auto"
            style={{ width: "224px", height: "80px" }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <img
                src={LevelIconSvg}
                alt="Level"
                className="w-5 h-5"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(7499%) hue-rotate(276deg) brightness(100%) contrast(100%)",
                }}
              />
              <p className="text-sm font-semibold" style={{ color: "#1F2937" }}>
                Account Level
              </p>
            </div>
            <p className="text-lg font-bold" style={{ color: "#9D00FF" }}>
              Master
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Link
          to="/create"
          className="w-full text-white py-3 px-4 rounded-md cursor-pointer flex items-center justify-center space-x-2 transition-colors hover:bg-purple-700"
          style={{
            backgroundColor: "#9D00FF",
          }}
        >
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Create Anecdote</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
