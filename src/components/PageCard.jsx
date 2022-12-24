import useValue from "../hooks/useValue";
export default function PageCard() {
  const { pages } = useValue();
  const style1 = { backgroundColor: "hsl(228, 100%, 84%)" };
  const style2 = { color: " hsl(213, 96%, 18%)" };
  return (
    <div className="h-[40vh]  bg-cover bg-center bg-no-repeat rounded-md bg-[url('./images/bg-sidebar-mobile.svg')] grid lg:h-[80vh] lg:bg-[url('./images/bg-sidebar-desktop.svg')] ">
      <div className="flex h-fit gap-3 lg:grid justify-self-center">
        {pages?.map((page) => {
          return (
            <div key={page.num} className="flex gap-10 h-fit m-4 items-center">
              <div
                className="border-solid border-white border-1 p-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-base"
                style={
                  page.isActive
                    ? { ...style1, ...style2 }
                    : { backgroundColor: "transparent" }
                }
              >
                {page.num}
              </div>
              <div className="hidden lg:grid">
                <span className="text-cool-gray uppercase text-xs">
                  {page.step}
                </span>
                <span className="uppercase font-semibold text-white text-sm">
                  {page.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
