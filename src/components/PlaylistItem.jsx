import { NavLink } from "..";
function PlaylistItem({ song, playlistTitle }) {
  // const prevSong = getPrevSong(playlist, song.id);
  // console.log(prevSong);
  return (
    <li>
      <NavLink
        className=""
        style={({ isActive }) => ({
          color: isActive ? "black" : "gray",
        })}
        to={`/playlist/${playlistTitle}/${song.id}${location.search}`}
        key={song.id}
      >
        <div className=" playlistItem">
          <span>{song.Track}</span>
          {song.Duration && <span>{song.Duration}</span>}
          {!song.Duration && ""}
        </div>
      </NavLink>
    </li>
  );
}

export default PlaylistItem;
