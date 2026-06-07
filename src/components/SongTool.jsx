import {
  DeleteIcon,
  HollowPlayIcon,
  HollowLikeIcon,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  usePlaylist,
} from "..";
function SongTool({ song }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { deleteSong } = usePlaylist();
  const { playlistTitle } = useParams();
  const urlArtist = song.Artist.toString().replaceAll(" ", "-");
  const urlTrack = song.Track.toString().replaceAll(" ", "-");
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  let playlistAdd;
  if (playlistTitle == "Mood") playlistAdd = `mood=${title}`;
  else if (playlistTitle == "Top_bands") playlistAdd = `bands`;
  else playlistAdd = playlistTitle;

  return (
    <div>
      <div className="flex w-full items-center justify-center gap-5 border-2 border-black p-2 rounded-full mt-5 bg-white md:bg-transparent">
        <DeleteIcon
          onClick={() => {
            if (playlistTitle) {
              deleteSong(song.id);
            }
            navigate(`/playlist/${playlistTitle}` + location.search);
          }}
        />
        <div
          onClick={() => {
            navigate(`/player/${playlistAdd}/${urlArtist}/${urlTrack}`);
          }}
        >
          <HollowPlayIcon />
        </div>
        <HollowLikeIcon />
      </div>
    </div>
  );
}

export default SongTool;
