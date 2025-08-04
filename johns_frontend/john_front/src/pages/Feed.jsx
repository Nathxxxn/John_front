import AnecdoteCard from "../components/AnecdoteCard";
import UserAvatar from "../assets/avatars/User Avatar.png";
import UserAvatar1 from "../assets/avatars/User Avatar (1).png";
import UserAvatar2 from "../assets/avatars/User Avatar (2).png";

const anecdotes = [
  {
    id: 1,
    user: "Alice Wonderland",
    avatar: UserAvatar,
    time: "2 hours ago",
    level: 42,
    text: "Just tried to teach my cat to play fetch. He brought back a dust bunny and gave me a look that said, 'Is this what you wanted, human?' Because I'm judging you! #CatLogic #PetParenthood",
    likes: 12,
    dislikes: 2,
    comments: 5,
    shares: 3,
  },
  {
    id: 2,
    user: "Bob The Builder",
    avatar: UserAvatar1,
    time: "5 hours ago",
    level: 28,
    text: "My latest DIY project involved assembling a flat-pack bookshelf. Three hours later, I have a very sturdy, very lopsided coffee table. Instructions are merely suggestions, right? #DIYFail #HomeImprovement",
    likes: 8,
    dislikes: 1,
    comments: 3,
    shares: 2,
  },
  {
    id: 3,
    user: "Charlie Chaplin",
    avatar: UserAvatar2,
    time: "1 day ago",
    level: 35,
    text: "Attempted to make a gourmet meal tonight. Ended up ordering pizza after setting off the smoke alarm twice. My culinary skills are truly #CookingAdventures #PizzasLife",
    likes: 15,
    dislikes: 0,
    comments: 7,
    shares: 4,
  },
];

const Feed = () => {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      {anecdotes.map((a, i) => (
        <AnecdoteCard key={i} anecdote={a} />
      ))}
    </div>
  );
};

export default Feed;
