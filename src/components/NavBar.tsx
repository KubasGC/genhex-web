import { FunctionComponent } from "react";
import Logo from "../assets/logo-white.png";

interface NavBarItemModel {
  text: string;
  active?: boolean;
}

const NavBarItem: FunctionComponent<NavBarItemModel> = ({ text, active }) => {
  let css = "cursor-pointer h-full flex items-center px-5 transition";

  if (active) {
    css += " text-white bg-white/20";
  } else {
    css += " hover:text-white text-white/70 hover:bg-white/20";
  }

  return (
    <div className={css}>
      <span>{text}</span>
    </div>
  );
};

const NavBar: FunctionComponent = () => {
  return (
    <nav className="w-full h-[60px] bg-primary shadow-lg flex gap-2 items-center px-4 justify-between sticky">
      <div className="text-white text-[24px] tracking-widest">
        <img src={Logo} className="h-[32px]" />
      </div>
      <div className="pl-10 grow flex text-white items-center h-full text-sm uppercase">
        <NavBarItem active={true} text="Discover" />
        <NavBarItem text="Browse" />
        <NavBarItem text="News" />
      </div>
    </nav>
  );
};

export default NavBar;
