import {
  useParams,
  useState,
  useNavigate,
  useEffect,
  useMemo,
  usePlaylist,
  CloseIcon,
} from "../..";
import SongDetails from "../../components/SongDetails";

function Song() {
  const { getSong, getPlaylistByTitle, getSongsByPlaylist } = usePlaylist();
  const params = useParams();
  const song = getSong(parseInt(params.songID));
  const { playlistTitle } = useParams();
  const playlist = useMemo(
    () => getPlaylistByTitle(playlistTitle),
    [playlistTitle, getPlaylistByTitle],
  );

  const songs = useMemo(
    () => (playlist ? playlist.Items : getSongsByPlaylist(playlistTitle)),
    [playlist, playlistTitle, getPlaylistByTitle],
  );
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    requestAnimationFrame(() => {
      setShowDetails(true);
    });
  }, []);
  return (
    <div
      className={`
        transition-transform duration-500 ease-out
          w-full flex flex-col md:flex-row 
        items-center h-1/3 md:h-full p-1 md:p-10 gap-2 backdrop-blur-2xl bg-gray-300/80 md:bg-gray-100
        ${showDetails ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div
        className="top-3 right-3 absolute cursor-pointer md:hidden"
        onClick={() => {
          setShowDetails(false);
          setTimeout(() => {
            navigate(`/playlist/${playlistTitle}`);
          }, 500);
        }}
      >
        <CloseIcon color="white" />
      </div>
      <SongDetails song={song} />
    </div>
  );
}

export default Song;
