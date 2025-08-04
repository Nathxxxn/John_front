const notifications = [
    { text: "John Doe started following you.", time: "5 minutes ago" },
    {
        text: "Your follow request to Jane Smith was accepted.",
        time: "15 minutes ago",
    },
    {
        text: "Congratulations! You've reached the 'Master Anecdotist' rank.",
        time: "1 hour ago",
    },
    { text: "You earned the 'Storyteller' badge!", time: "3 hours ago" },
    {
        text: 'John Doe commented on your anecdote: "Great story!"',
        time: "2 hours ago",
    },
    { text: "Alice Smith liked your anecdote.", time: "1 day ago" },
    { text: "Bob Johnson shared your anecdote.", time: "2 days ago" },
];

const Notifications = () => {
    return (
        <div className="max-w-2xl mx-auto mt-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        {notifications.map((notif, i) => (
            <div key={i} className="bg-white p-4 rounded-md shadow">
            <p className="text-sm text-gray-800">{notif.text}</p>
            <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
            </div>
        ))}
        </div>
    );
};

export default Notifications;
