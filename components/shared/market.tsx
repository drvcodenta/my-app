import MarketCard from "../card/marketCard"

function MarketStories() {
  const card = [1,2];
  return (
    <>
    <div className="text-pink bg-slate-200 w-40 text-lg font-bold text-center m-1 p-1">MARKET STORIES</div>
    <div>
      {card.map((_, index) => (
        <MarketCard key={index} />
      ))}
    </div>
    </>
  )
}

export default MarketStories