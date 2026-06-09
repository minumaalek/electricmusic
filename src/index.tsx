//routes
export { default as Home } from "./routes/Home";
export { default as Songs } from "./routes/playlist/Songs";
export { default as Song } from "./routes/playlist/Song";
export { default as AddNewSong } from "./routes/AddNewSong";
export { default as SignInUp } from "./routes/SignInUp";
export { default as Player } from "./routes/Player";
export { default as News } from "./routes/News";
export { default as BlogList } from "./routes/blog/BlogList";
export { default as BlogPost } from "./routes/blog/BlogPost";
export { default as User } from "./routes/User";
export { default as Preferences } from "./routes/settings/Preferences";
export { default as Application } from "./routes/settings/Application";
export { default as Profile } from "./routes/settings/Profile";
export { default as About } from "./routes/About";

//components
export { default as NavBar } from "./components/NavBar";
export { default as Menu } from "./components/Menu";
export { default as PlaylistItem } from "./components/PlaylistItem";
export { default as Comments } from "./components/Comments";
export { default as SongBox } from "./components/SongBox";
export { default as UserCard } from "./components/UserCard";
export { default as Loading } from "./components/Loading";
export { default as Toggle } from "./components/buttons/Toggle";
export { default as Input } from "./components/Input";

//react components and hooks
export {
  createContext,
  useContext,
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
export {
  NavLink,
  Link,
  useLocation,
  useNavigate,
  Outlet,
  useParams,
  useSearchParams,
  Navigate,
} from "react-router-dom";
export { Helmet } from "react-helmet-async";

//custom hooks
export { usePlaylist } from "./contexts/PlaylistsContext";
export { useModal } from "./contexts/ModalContext";

//icons
export { default as DeleteIcon } from "./icons/Delete";
export { default as PrevIcon } from "./icons/Prev";
export { default as NextIcon } from "./icons/Next";
export { default as BurgerIcon } from "./icons/Burger";
export { default as SearchIcon } from "./icons/Search";
export { default as CloseIcon } from "./icons/Close";
export { default as PlayIcon } from "./icons/Play";
export { default as PauseIcon } from "./icons/Pause";
export { default as HollowPlayIcon } from "./icons/HollowPlay";
export { default as HollowLikeIcon } from "./icons/HollowLike";
export { default as LikeIcon } from "./icons/Like";
export { default as ReturnIcon } from "./icons/Return";
export { default as StarIcon } from "./icons/Star";
export { default as AccountIcon } from "./icons/Account";
export { default as PasswordIcon } from "./icons/Password";
export { default as MailIcon } from "./icons/Mail";
export { default as AboutIcon } from "./icons/About";
export { default as TelegramIcon } from "./icons/Telegram";
export { default as YoutubeIcon } from "./icons/Youtube";
export { default as InstagramIcon } from "./icons/Instagram";
export { default as MoreIcon } from "./icons/More";

//maps
export { navMap } from "./js/maps";
