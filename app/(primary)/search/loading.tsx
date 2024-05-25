export default function LoadingW() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="body-inside bg-slate-300 h-auto px-1">
      <div className="h-[125px] rounded-t-md mb-1"></div>
      <div className="rounded-b-md grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
        {data.map((num) => {
          return (
            <div className={`item-card`} key={num}>
              <div className="flex-grow-[6] bg-white rounded-t-md h-[160px] make-center skeleton skeleton-text"></div>
              <div className="flex-grow-[4] rounded-b-md bg-slate-100 px-2 text-black flex flex-col justify-evenly">
                <h3>
                  <div className="skeleton skeleton-text"></div>
                </h3>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="skeleton skeleton-text"></span>
                    <span className="skeleton skeleton-text"></span>
                  </div>
                </div>
                <div className="skeleton skeleton-text"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
