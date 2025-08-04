import AnecdoteCard from "../components/AnecdoteCard";

const user = {
    name: "Jane Doe",
    avatar: {mockAvatar: "/src/assets/User Avatar (3).png"},
    bio: "Sharing my daily dose of life’s little absurdities and triumphs. Always looking for a good story!",
    anecdotes: [
        {
        user: "Jane Doe",
        time: "3 hours ago",
        text: "My cat just tried to 'help' me with laundry by pulling all the clean clothes out of the basket...",
        tags: "#CatLife #LaundryDay",
        },
        {
        user: "Jane Doe",
        time: "1 day ago",
        text: "Attempted to make a gourmet meal tonight. Ended up ordering pizza after setting off the smoke alarm...",
        tags: "#CookingAdventures #PizzasLife",
        },
    ],
};

const Profile = () => {
    return (
        <div className="max-w-4xl mx-auto mt-6 space-y-6">
        <div className="bg-white p-6 rounded-md shadow flex flex-col items-center text-center">
            <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 mt-2 max-w-md">{user.bio}</p>

            <div className="flex justify-center gap-10 mt-6">
            <div className="text-sm">
                <p className="font-bold text-lg">124</p>
                <p>Anecdotes</p>
            </div>
            <div className="text-sm">
                <p className="font-bold text-lg">876</p>
                <p>Followers</p>
            </div>
            <div className="text-sm">
                <p className="font-bold text-lg">321</p>
                <p>Following</p>
            </div>
            </div>

            <div className="w-full flex justify-around mt-6 text-left">
            <div className="w-1/2">
                <p className="text-sm font-semibold">Daily Challenges</p>
                <p className="text-xs text-gray-500">
                Next task: Post an anecdote with 3+ likes
                </p>
                <div className="bg-gray-200 h-2 mt-1 rounded-full">
                <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                </div>
            </div>
            <div className="w-1/2">
                <p className="text-sm font-semibold">Account Level</p>
                <p className="text-xs text-purple-700 font-bold">
                Rank: Master Anecdotist
                </p>
                <div className="bg-gray-200 h-2 mt-1 rounded-full">
                <div className="bg-purple-300 h-2 rounded-full w-4/5"></div>
                </div>
            </div>
            </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-4">My Anecdotes</h3>
            {user.anecdotes.map((a, i) => (
            <AnecdoteCard key={i} anecdote={a} />
            ))}
        </div>
        </div>
    );
};

export default Profile;
