export default function Page() {
  return (
    <main>
      <div className="body-container h-auto px-1">
        <div className="h-[500px] p-4 rounded-md border bg-slate-300 mb-1 flex">
          <div className="flex-grow-[3.5] border bg-black"></div>
          <div className="flex-grow-[6.5] border bg-red-500"></div>
        </div>
        <div className="h-[500px] rounded-md border border-red-500 bg-slate-300 mb-1"></div>
      </div>
    </main>
  );
}
