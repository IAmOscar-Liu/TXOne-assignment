import analysisIcon from "../assets/analysis.svg";
import userIcon from "../assets/user.svg";
import arrowDownIcon from "../assets/arrow_down.svg";

function Header() {
  return (
    <header className="z-20 flex h-16 flex-shrink-0 justify-between bg-white px-6 shadow-md">
      <div className="flex gap-3">
        <img src={analysisIcon} alt="" width={24} height={24} />
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-bold tracking-tighter drop-shadow-md">
            Analysis
          </h1>
          <span className="text-black-60">.dev</span>
        </div>
      </div>

      <div className="flex cursor-pointer items-center gap-3">
        <img src={userIcon} alt="" width={24} height={24} />
        <p>username</p>
        <img src={arrowDownIcon} alt="" width={11} height={7} />
      </div>
    </header>
  );
}

export default Header;
