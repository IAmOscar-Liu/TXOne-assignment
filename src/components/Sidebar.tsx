import { NavLink, NavLinkRenderProps } from "react-router";
import populationIcon from "../assets/sidebar-population.svg";
import weatherActiveIcon from "../assets/sidebar-weather-active.svg";
import weatherIcon from "../assets/sidebar-weather.svg";
import cn from "../utils/cn";

const navLinkClassName = ({ isActive }: NavLinkRenderProps) =>
  cn(
    "group relative flex gap-2 px-8 py-4 text-black-40 before:contents-[''] before:absolute before:left-full before:top-0 before:h-full before:w-1 before:bg-primary before:hidden",
    {
      "bg-primary-10 text-black before:block": isActive,
      active: isActive,
      inactive: !isActive,
    },
  );

function Sidebar() {
  return (
    <nav className="border-r-secondary-border me-1 border-r-[1.5px] bg-white pt-8">
      <NavLink to="/" className={navLinkClassName}>
        <img
          className="group-[.inactive]:hidden"
          src={weatherActiveIcon}
          alt=""
          width={24}
          height={24}
        />
        <img
          className="group-[.active]:hidden"
          src={weatherIcon}
          alt=""
          width={24}
          height={24}
        />
        <p>Today's Weather</p>
      </NavLink>
      <NavLink to="/population" className={navLinkClassName}>
        <img src={populationIcon} alt="" width={24} height={24} />
        <p>Population</p>
      </NavLink>
    </nav>
  );
}

export default Sidebar;
