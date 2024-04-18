export default function Page() {
  return (
    <main>
      <div className="body-container bg-slate-300 h-auto">
        <div className="h-[125px] rounded-t-md border border-red-500"></div>
        <div className="border border-black rounded-b-md grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
          <div className="rounded-md border border-black h-[500px]">Hello</div>
          <div className="border border-black rounded-md h-[500px]">Hello</div>
          <div className="border border-black rounded-md h-[500px]">Hello</div>
          <div className="border border-black rounded-md h-[500px]">Hello</div>
          <div className="border border-black rounded-md h-[500px]">Hello</div>
        </div>
      </div>
    </main>
  );
}
