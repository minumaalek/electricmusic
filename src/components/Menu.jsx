import { navMap, useNavigate, useState, useLocation } from "..";

function Menu({ onClose }) {
  const navigate = useNavigate();
  const [hideMenu, setHideMenu] = useState(false);
  const location = useLocation();
  const navItems = navMap.map((nav) => {
    const isActive = nav.path === location.pathname;

    if (!isActive)
      return (
        <li
          className=" p-2 text-black"
          key={nav.id}
          onClick={() => {
            setTimeout(() => {
              setHideMenu(true);
            }, 200);
            navigate(nav.path);
            onClose;
          }}
        >
          {nav.title}
        </li>
      );
  });

  if (!hideMenu)
    return (
      <div className="fixed h-screen w-screen left-0 top-0 ">
        <div className="w-full h-full bg-white flex flex-col py-14 px-5">
          <ul className="menu">{navItems}</ul>
        </div>
      </div>
    );
}

export default Menu;
