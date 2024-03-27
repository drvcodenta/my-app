export default function Home({ isOpen } : any) {
  return (
    <main className={isOpen ? 'w-7/10' : 'w-0'}>
      <div className="text-pink text-2xl font-bold bg-slate-200 w-72 text-center p-2 m-1">
        DISSCUSSION FORUM
      </div>
    </main>
  );
}