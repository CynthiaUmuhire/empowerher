export default function StorySkeleton() {
  return (
    <div className="relative max-w-md mx-auto flex flex-col items-center overflow-hidden p-6 transition-colors bg-primary-800/70  hover:bg-primary-400/10">
      <div className="basis-3/5 ">
        <div className="h-32 w-4/5 animate-pulse rounded-lg  bg-primary-800/40"></div>
      </div>
      <div className="flex w-full basis-2/5 flex-col gap-3sm:gap-6 ">
        <ul className="flex flex-col gap-3 text-xs sm:text-sm">
          <li className="h-5 w-full animate-pulse rounded-lg bg-primary-800/90 "></li>
          <li className="h-3 w-full animate-pulse rounded-lg bg-primary-800/90 "></li>
          <li className="animate-pulse">
            <span className="h-32 w-2/3 rounded-lg bg-primary-800/90 "></span>
          </li>
        </ul>
        <div>
          <p className="flex items-center gap-1 mt-5">
            <span className="mx-auto h-5 w-2/3  transition duration-200 ease-in-out rounded-lg bg-primary-800/90 "></span>
          </p>
        </div>
      </div>
    </div>
  );
}
