import DiscussionCard from "@/components/card/discussionCard";

export default function Home() {
  const cards = [1,2,3,4];
  return (
    <main>
      <div className="text-pink text-2xl font-bold bg-slate-200 w-72 text-center p-2 m-1">
        DISSCUSSION FORUM
      </div>
      <div>
        {cards.map((_, index) => (
          <DiscussionCard key={index} />
        ))}
      </div>
    </main>
  );
}