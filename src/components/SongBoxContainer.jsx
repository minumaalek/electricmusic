import { SongBox, usePlaylist, NavLink, useNavigate, MoreIcon } from "..";

function SongBoxContainer({ boxTitle, playlistTitle, playlistType }) {
  const { getSongsByPlaylist } = usePlaylist();
  let playlist;
  if (playlistType == "list") {
    const { getPlaylistByTitle } = usePlaylist();
    const playlistItems = getPlaylistByTitle(playlistTitle).Items;
    playlist = playlistItems.map((item) => item);
  } else {
    playlist = getSongsByPlaylist(playlistTitle);
  }
  const navigate = useNavigate();
  return (
    <div className="songBoxContainer flex flex-col gap-3 items-center justify-center w-full">
      <div className="songBoxTitle ">
        <h2 onClick={() => navigate(`/playlist/${playlistTitle}`)}>
          {boxTitle}
        </h2>
        <NavLink
          className="xl:right-32  xl:absolute"
          to={`/playlist/${playlistTitle}`}
        >
          <MoreIcon />
        </NavLink>
      </div>
      <div className="flex w-full px-3 gap-3 items-center justify-around lg:justify-between lg:px-10 lg:w-3/4">
        {playlist.map((song, i = 1) => {
          if (i < 3)
            return (
              <div
                className=" cursor-pointer w-28 sm:w-48 md:w-64 mb-2 flex flex-col text-center items-center justify-center"
                key={song.id}
                onClick={() =>
                  navigate(
                    playlistType == "list"
                      ? `/playlist/${playlistTitle}?title=${song.Track.toString().replaceAll(" ", "+")}`
                      : `/playlist/${playlistTitle}/${song.id}`,
                  )
                }
              >
                <div className="size-28 md:size-48 xl:size-64">
                  <SongBox
                    Title={song.Track}
                    Artwork={song.Artwork ? song.Artwork : ""}
                    isFree={song.Free && true}
                  />
                </div>
                <span className="cursor-pointer text-black truncate">
                  {song.Track}
                </span>
              </div>
            );
          i++;
        })}
      </div>
    </div>
  );
}

export default SongBoxContainer;
