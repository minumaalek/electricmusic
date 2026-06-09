import {
  Outlet,
  useParams,
  useSearchParams,
  useMemo,
  useCallback,
  usePlaylist,
  PlaylistItem,
  Loading,
} from "../..";
import Accordion from "../../components/Accordion";
import { useTransition, useState, useEffect } from "react";

function Songs() {
  const { playlistTitle } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const [isPending, startTransition] = useTransition();
  // const [filteredSongs, setFilteredSongs] = useState([]);

  const { getSongsByPlaylist, getPlaylistByTitle } = usePlaylist();

  const playlist = useMemo(
    () => getPlaylistByTitle(playlistTitle),
    [playlistTitle, getPlaylistByTitle],
  );

  const songs = useMemo(
    () => (playlist ? playlist.Items : getSongsByPlaylist(playlistTitle)),
    [playlist, playlistTitle, getPlaylistByTitle],
  );

  // useEffect(() => {
  //   setFilteredSongs(songs);
  // }, [songs]);

  // let deBounce;

  // useEffect(() => {
  //   startTransition(() => {
  //     if (!query) {
  //       setFilteredSongs(songs);
  //     } else {
  //       clearTimeout(deBounce);
  //       deBounce = setTimeout(() => {
  //         const filtered = songs.filter((song) => {
  //           return song.Track.toLowerCase().includes(query.toLowerCase());
  //         });
  //         setFilteredSongs(filtered);
  //       }, 1000);
  //     }
  //   });
  // }, [query, songs]);

  const filteredSongs = useMemo(() => {
    if (!query) return songs;

    return songs.filter((song) =>
      song.Track.toLowerCase().includes(query.toLowerCase()),
    );
  }, [songs, query]);

  const accordionHandler = useCallback(
    (arg) => {
      if (getPlaylistByTitle(playlistTitle)) {
        return getPlaylistByTitle(playlistTitle).function(arg);
      }
      return null;
    },
    [playlistTitle, getPlaylistByTitle],
  );

  return (
    <div className="w-screen flex flex-col md:flex-row ">
      <div className="w-full mt-12 md:w-1/2">
        {isPending && <Loading />}
        <div className="">
          <ul className="flex flex-col">
            {filteredSongs.map((song) => {
              return song.Duration ? (
                <PlaylistItem
                  song={song}
                  playlist={filteredSongs}
                  playlistTitle={playlistTitle}
                  key={song.id}
                />
              ) : (
                <Accordion
                  title={song.Track}
                  items={accordionHandler(song.Track)}
                  key={song.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="md:h-full md:bg-gray-100 fixed right-0 bottom-0 w-full md:w-1/2 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Songs;
