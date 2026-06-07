import { Routes, Route } from "react-router-dom";
import {
  Home,
  Songs,
  Song,
  AddNewSong,
  Player,
  NavBar,
  SignInUp,
  News,
  BlogList,
  BlogPost,
  useLocation,
  User,
  Preferences,
  Application,
  Profile,
  About,
} from ".";
import { PlaylistProvider } from "./contexts/playlistsContext";
import { ModalProvider, Modal } from "./contexts/ModalContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const { pathname } = useLocation();

  // throw new Error("Just test and fun🐈");

  return (
    <>
      <HelmetProvider>
        <PlaylistProvider>
          <ModalProvider>
            <NavBar />
            <Modal />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="playlist/:playlistTitle" element={<Songs />}>
                <Route
                  index
                  element={<p className="hidden md:block">Choose a song.</p>}
                />
                <Route path=":songID" element={<Song />} />
              </Route>
              <Route path="new-song" element={<AddNewSong />} />
              <Route path="sign" element={<SignInUp />} />
              <Route
                path="player/:playlistTitle/:songArtist/:songTrack"
                element={<Player />}
              />
              <Route path="news" element={<News />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:blogURL" element={<BlogPost />} />
              <Route path="user/:username" element={<User />} />
              <Route path="preferences" element={<Preferences />}>
                <Route path="application" element={<Application />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </ModalProvider>
        </PlaylistProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
