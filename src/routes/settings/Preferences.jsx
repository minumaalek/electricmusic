import { Outlet, Toggle, NavLink } from "../..";
function Preferences() {
  const parts = [
    { id: 1, title: "Application" },
    { id: 2, title: "Profile" },
  ];
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="h-1/2 shadow-lg w-3/4 ">
        <div className="flex gap-2 py-1">
          {parts.map((part) => {
            return (
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "gray",
                  backgroundColor: isActive ? `#e2e8f0` : "transparent",
                })}
                className={`px-2 py-1 rounded-lg`}
                key={part.id}
                to={`/preferences/${part.title.toLocaleLowerCase()}`}
              >
                {part.title}
              </NavLink>
            );
          })}
        </div>
        <div className="w-full h-full bg-gray-200 -mt-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Preferences;
