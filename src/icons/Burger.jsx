import { useState } from "react";
import { Menu, useLocation, useEffect } from "..";
import { useNavigationType } from "react-router-dom";

function Burger() {
  const [click, setClick] = useState(false);
  const navType = useNavigationType();
  const location = useLocation();
  useEffect(() => {
    setClick(false);
  }, [location]);
  return (
    <div>
      {click && <Menu onClose={() => setClick(false)} />}
      <div
        className={`text-black flex flex-col gap-1 cursor-pointer ${
          click && "-translate-y-[1deg]"
        } z-50`}
        onClick={() => setClick((prev) => !prev)}
      >
        <div
          className={`Burger border-b-4 border-black w-5 transition-all duration-300 ${
            click && "rotate-45 w-6 -translate-x-1"
          }`}
        ></div>
        <div
          className={`${click && "hidden"} Burger border-b-4 border-black w-5`}
        ></div>
        <div
          className={`Burger border-b-4 border-black w-5 transition-all duration-300 ${
            click && "-rotate-45 w-6 -translate-y-2 -translate-x-1"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Burger;
