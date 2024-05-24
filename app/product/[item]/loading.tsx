export default function LoadingW() {
  const data = [1, 2, 3, 4];
  return (
    <div className="body-inside h-auto">
      <div className="ssm:h-[1000px] md:h-[500px] p-4 rounded-md border bg-slate-300">
        <div className="w-full h-full mb-1 md:flex justify-center gap-1 ssm:block">
          <div className="flex-grow-[3] md:min-w-[50%] xl:min-w-[30%] flex flex-col transition-slide ssm:h-[50%] md:h-full">
            <div className="flex-grow-[8] relative object-contain mb-1 skeleton"></div>
            <div className="ssm:hidden flex-grow-[2] md:flex">
              {data.map((each: number) => {
                return (
                  <div
                    className={`flex-grow-[2] relative rounded-md object-contain max-w-[25%] skeleton`}
                    key={each}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="flex-grow-[7] text-black rounded-md p-4 flex flex-col ssm:gap-[1.5em] pt-6 md:border-l-2 md:gap-[2.5em] xl:gap-[3.5em] border-gray-500 ml-2">
            <h1 className="font-bold text-2xl skeleton skeleton-text"></h1>
            <div className="flex gap-2">
              <h2 className="font-bold text-3xl skeleton skeleton-text"></h2>
              <h3 className="font-bold text-xl line-through text-gray-600 skeleton skeleton-text"></h3>
            </div>
            <div className="flex ssm:flex-col md:flex-row gap-6">
              <div className="cursor-pointer rounded-full p-4 make-center md:w-[50%] md:min-w-[150px] skeleton skeleton-text"></div>
              <div className="cursor-pointer rounded-full p-4 make-center md:w-[50%] md:min-w-[150px] skeleton skeleton-text"></div>
            </div>
            <div>
              <h3 className="skeleton skeleton-text"></h3>
            </div>
            <h2 className="skeleton skeleton-text"></h2>
          </div>
        </div>
      </div>
      <div className="rounded-md mb-1 xl:flex gap-1 mt-1 h-[200px] skeleton">
        <div className="rounded-md relative flex-grow-[7] xl:max-w-[70%] bg-slate-300 p-2 pb-6 h-full skeleton"></div>
        <div className="rounded-md flex-grow-[3] ssm:mt-1 md:grid md:grid-cols-2 md:gap-1 xl:max-w-[30%] h-full xl:mt-0 xl:block skeleton"></div>
      </div>
    </div>
  );
}
