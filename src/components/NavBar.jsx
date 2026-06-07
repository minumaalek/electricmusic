import Account from "../icons/Account";
import Settings from "../icons/Settings";
import SearchBar from "./SearchBar";
import { useModal } from "../contexts/ModalContext";
import {
  CloseIcon,
  PrevIcon,
  BurgerIcon,
  navMap,
  useState,
  useLocation,
  useNavigate,
  SearchIcon,
  useSearchParams,
  useEffect,
} from "..";
import { lazy, Suspense } from "react";

function NavBar() {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const location = useLocation();

  const navItems = navMap.map((nav) => {
    const isActive = nav.path === location.pathname;
    if (!isActive)
      return (
        <button onClick={() => navigate(nav.path)} key={nav.title}>
          {nav.title}
        </button>
      );
  });

  const [, setSearchParams] = useSearchParams();
  const localName = localStorage.getItem("username");

  const closeHandler = () => {
    setShowSearchBar(false);
    setSearchParams({});
  };

  const nestedRoute = location.pathname.split("/").length > 2;
  const routeParent = location.pathname.split("/")[1];
  const playlistRoute = routeParent === "playlist";
  const playlistTitle = playlistRoute ? location.pathname.split("/")[2] : null;

  const showSearchIcon =
    (!nestedRoute && routeParent === "blog") || playlistRoute;

  const playlistTitleMap = {
    Mood: "Based on your mood",
    Top_bands: "Top bands these days",
    Hard_electric: "Hard guitar playing",
    Soft_electric: "Soft songs for new listeners",
  };

  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    setShowSearchBar(false);
  }, [routeParent]);

  // const LazySearchIcon = lazy(() => import("../icons/Search"));

  // if (routeParent != "player")
  return (
    <div className="bg-white w-full h-12 fixed flex items-center px-3 shadow-xl z-20 top-0 justify-between">
      <div className="flex items-center">
        {routeParent !== "playlist" && (
          <div className="hidden lg:flex gap-1">{navItems}</div>
        )}
        {!playlistRoute ? (
          <div className="lg:hidden left-3">
            <BurgerIcon />
          </div>
        ) : (
          <div onClick={() => navigate("/")}>
            <PrevIcon />
          </div>
        )}
      </div>
      <div className={`flex`}>
        {playlistRoute && !showSearchBar && (
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="font-bold text-xl">
              {playlistTitleMap[playlistTitle]}
            </span>
          </div>
        )}

        <div className="flex gap-1 items-center w-full">
          {showSearchIcon ? (
            <div className="" onClick={() => setShowSearchBar(true)}>
              {!showSearchBar && (
                // <Suspense
                //   fallback={
                //     <span className="w-6 h-6 inline-block bg-gray-200 rounded-full animate-pulse" />
                //   }
                // >
                //   <LazySearchIcon />
                // </Suspense>
                <SearchIcon />
              )}
            </div>
          ) : (
            <div>
              {localName ? (
                <div className="flex -z-10">
                  <div>{routeParent != "user" && <Account />}</div>
                  <div>{routeParent != "preferences" && <Settings />}</div>
                </div>
              ) : (
                <div>
                  {routeParent != "sign" && (
                    <button className="w-32" onClick={() => navigate("/sign")}>
                      Sign in/up
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
          <div>
            {showSearchBar && (
              <div className="py-1 flex items-center justify-between w-80 md:w-96 p-3 rounded-lg">
                <SearchBar />
                <div onClick={closeHandler}>
                  <CloseIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
