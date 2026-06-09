import {
  PlayIcon,
  PauseIcon,
  LikeIcon,
  ReturnIcon,
  PrevIcon,
  NextIcon,
  useState,
  useNavigate,
  usePlaylist,
  SongBox,
  useParams,
} from "..";

function Player() {
  const [play, setPlay] = useState(false);
  const { playlistTitle, songArtist, songTrack } = useParams();
  const navigate = useNavigate();
  const {
    getSongsByPlaylist,
    getPlaylistByTitle,
    getSongByInfo,
    getPlaylistByArtist,
  } = usePlaylist();

  let songs;
  if (playlistTitle.includes("mood"))
    songs = getPlaylistByTitle("Mood").function(playlistTitle.split("=")[1]);
  else if (playlistTitle == "bands")
    songs = getPlaylistByArtist(songArtist.replaceAll("-", " "));
  else songs = getSongsByPlaylist(playlistTitle);

  const currentSong = getSongByInfo(songArtist, songTrack);

  const songsArray = Array.isArray(songs) ? songs : [];

  const currentSongIndex = songsArray.findIndex(
    (s) => s.Track === currentSong.Track && s.Artist === currentSong.Artist,
  );

  const [currentIndex, setCurrentIndex] = useState(currentSongIndex);

  const prevSongHandler = () => {
    if (songsArray.length === 0) return;

    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = songsArray.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  const nextSongHandler = () => {
    if (songsArray.length === 0) return;

    let newIndex = currentIndex + 1;
    if (newIndex >= songsArray.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    // setSong(songsArray[newIndex]);
  };

  const song = songsArray[currentIndex];

  const { Track, Artist, Album, Artwork, Core } = song || {};

  return (
    <div className="h-screen w-screen flex flex-col bg-black text-white justify-center gap-20 items-center player lg:grid grid-cols-2 place-content-center place-items-center xl:p-80">
      {!song.Free && (
        <div className="bg-gray-600/95 w-full h-full fixed z-5 justify-center items-center flex flex-col gap-3">
          <span className="text-xl">
            You must be a pro user to play this song.
          </span>
        </div>
      )}

      <div className="size-72 p-6 md:p-0 md:size-96 w-full flex flex-col items-center justify-between mb-10 md:mb-0">
        <SongBox Artwork={Artwork} />
        <div className="w-full bg-white h-2 "></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          <h2>{Track}</h2>
          <h3>{Artist}</h3>
          <h4>{Album}</h4>
        </div>
        <div className="bg-white size-52 md:size-72 rounded-full flex flex-col justify-between items-center p-3 playerTool z-10">
          <LikeIcon />
          <div className="w-full flex justify-between items-center">
            <div onClick={prevSongHandler}>
              <PrevIcon />
            </div>
            <div className="bg-black size-24 md:size-36 rounded-full flex items-center justify-center">
              <div
                onClick={() => {
                  if (song.Free) setPlay((prev) => !prev);
                }}
              >
                {play ? <PlayIcon white /> : <PauseIcon white />}
              </div>
            </div>
            <div onClick={nextSongHandler}>
              <NextIcon />
            </div>
          </div>
          <div onClick={() => navigate(-1)}>
            <ReturnIcon />
          </div>
        </div>
        <span className="p-1 rounded-xl bg-white text-black text-lg">
          {Core && Core}
        </span>
      </div>
    </div>
  );
}

export default Player;
