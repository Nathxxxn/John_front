import NewFollowIconNotif from "../assets/icons/new-follow-icon-notif.svg";
import CheckIconNotif from "../assets/icons/check-icon-notif.svg";
import StarIconNotif from "../assets/icons/star-icon-notif.svg";
import EarnBadgeIcon from "../assets/icons/earn-badge-icon.svg";
import NewCommentIcon from "../assets/icons/new-comment-icon.svg";
import NewLikeIcon from "../assets/icons/new-like-icon.svg";
import NewShareIcon from "../assets/icons/new-share-icon.svg";

const notifications = [
    {
        text: "John Doe started following you.",
        time: "5 minutes ago",
        icon: NewFollowIconNotif,
        iconBg: "bg-green-50",
    },
    {
        text: "Your follow request to Jane Smith was accepted.",
        time: "15 minutes ago",
        icon: CheckIconNotif,
        iconBg: "bg-purple-50",
    },
    {
        text: "Congratulations! You've reached the 'Master Anecdotist' rank.",
        time: "1 hour ago",
        icon: StarIconNotif,
        iconBg: "bg-red-50",
    },
    {
        text: "You earned the 'Storyteller' badge!",
        time: "3 hours ago",
        icon: EarnBadgeIcon,
        iconBg: "bg-yellow-100",
    },
    {
        text: 'John Doe commented on your anecdote: "Great story!"',
        time: "2 hours ago",
        icon: NewCommentIcon,
        iconBg: "bg-blue-100",
    },
    {
        text: "Alice Smith liked your anecdote.",
        time: "1 day ago",
        icon: NewLikeIcon,
        iconBg: "bg-blue-100",
    },
    {
        text: "Bob Johnson shared your anecdote.",
        time: "2 days ago",
        icon: NewShareIcon,
        iconBg: "bg-blue-100",
    },
];

const Notifications = () => {
    return (
        <div className="max-w-4xl mx-auto mt-6 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>
        <div className="space-y-4">
            {notifications.map((notif, i) => (
            <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start justify-between"
            >
                <div className="flex items-start gap-4">
                <div
                    className={`w-12 h-12 rounded-full ${notif.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                    <img src={notif.icon} alt="" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-800 leading-relaxed">
                    {notif.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded-full transition-colors ml-2">
                <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                </button>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Notifications;
