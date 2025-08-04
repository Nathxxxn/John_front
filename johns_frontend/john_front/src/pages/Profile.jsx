import AnecdoteCard from "../components/AnecdoteCard";
import UserAvatar from "../assets/avatars/User Avatar (3).png";
import FollowBtn from "../assets/buttons/follow-btn.svg";
import EditProfBtn from "../assets/buttons/edit-prof-btn.svg";
import Badge1 from "../assets/badges/badge1.svg";
import Badge2 from "../assets/badges/badge2.svg";
import Badge3 from "../assets/badges/badge3.svg";
import BadgeIcon from "../assets/badges/badge-icon.svg";
import ChallengeIcon from "../assets/icons/challenge-icon.svg";
import StarIcon from "../assets/icons/star-icon.svg";
import LevelProgress from "../assets/progress/level-progress.png";
import ProgressBar2 from "../assets/progress/progress-bar2.png";

const user = {
    name: "Jane Doe",
    avatar: UserAvatar,
    bio: "Sharing my daily dose of life's little absurdities and triumphs. Always looking for a good story!",
    stats: {
        anecdotes: 124,
        followers: 876,
        following: 321,
    },
    anecdotes: [
        {
        user: "Jane Doe",
        avatar: UserAvatar,
        level: "Level 22",
        time: "3 hours ago",
        text: "My cat just tried to 'help' me with laundry by pulling all the clean clothes out of the basket and scattering them across the floor. I guess he thinks I need more exercise. #CatLife #LaundryDay",
        likes: 12,
        dislikes: 1,
        comments: 3,
        shares: 2,
        },
        {
        user: "Jane Doe",
        avatar: UserAvatar,
        level: "Level 22",
        time: "1 day ago",
        text: "Attempted to make a gourmet meal tonight. Ended up ordering pizza after setting off the smoke alarm twice. My culinary skills are truly a work of abstract art. #CookingAdventures #PizzaIsLife",
        likes: 8,
        dislikes: 0,
        comments: 1,
        shares: 1,
        },
    ],
};

const Profile = () => {
    return (
        <div className="w-full mx-auto p-6 bg-gray-50 min-h-screen space-y-8">
        {/* Header Profile Section */}
        <div className="bg-white p-8 rounded-lg text-center">
            {/* Profile Picture with Purple Border */}
            <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-purple-500 to-purple-600">
                <img
                src={user.avatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
                />
            </div>
            </div>

            {/* Name */}
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {user.name}
            </h1>

            {/* Bio */}
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{user.bio}</p>

            {/* Stats */}
            <div className="flex justify-center gap-16 mb-6">
            <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                {user.stats.anecdotes}
                </p>
                <p className="text-sm text-gray-600">Anecdotes</p>
            </div>
            <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                {user.stats.followers}
                </p>
                <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                {user.stats.following}
                </p>
                <p className="text-sm text-gray-600">Following</p>
            </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-8">
            <button className="cursor-pointer">
                <img src={FollowBtn} alt="Follow" className="h-10" />
            </button>
            <button className="cursor-pointer">
                <img src={EditProfBtn} alt="Edit Profile" className="h-10" />
            </button>
            </div>

            {/* Achievements Section */}
            <div className="pt-6">
            <div className="flex items-center justify-center mb-6">
                <img src={BadgeIcon} alt="Badge" className="w-6 h-6 mr-3" />
                <h2 className="text-lg font-semibold text-gray-800">
                Achievements
                </h2>
            </div>
            <div className="flex justify-center gap-4">
                <div className="text-center">
                <img src={Badge1} alt="First Post" className="w-77.91 h-full" />
                </div>
                <div className="text-center">
                <img src={Badge2} alt="Storyteller" className="w-83.64 h-full" />
                </div>
                <div className="text-center">
                <img
                    src={Badge3}
                    alt="Community Builder"
                    className="w-133.52 h-full"
                />
                </div>
            </div>
            </div>
        </div>

        {/* Progress Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Daily Challenges */}
            <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-2">
                <img src={ChallengeIcon} alt="Challenge" className="w-6 h-6 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">
                Daily Challenges
                </h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
                Next task: Post an anecdote with 3+ likes
            </p>
            <img
                src={ProgressBar2}
                alt="Challenge Progress"
                className="w-full h-3 object-cover rounded-full"
            />
            <p className="text-xs text-gray-500 mt-2">60% Complete</p>
            </div>

            {/* Account Level */}
            <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-2">
                <img src={StarIcon} alt="Level" className="w-6 h-6 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">
                Account Level
                </h3>
            </div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
                Rank: Master Anecdotist
            </p>
            <img
                src={LevelProgress}
                alt="Level Progress"
                className="w-full h-3 object-cover rounded-full mb-2"
            />
            <p className="text-xs text-gray-500">85% to Grand Master</p>
            </div>
        </div>

        {/* My Anecdotes Section */}
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Anecdotes</h3>
            <div className="max-w-5xl mx-auto">
            {user.anecdotes.map((anecdote, index) => (
                <AnecdoteCard key={index} anecdote={anecdote} />
            ))}
            </div>
        </div>
        </div>
    );
};

export default Profile;
