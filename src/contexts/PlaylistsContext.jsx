import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { getSongs } from "../js/songs";
import noArt from "../assets/artworks/noArt.png";

const PlaylistContext = createContext();

export const usePlaylist = () => {
  const context = useContext(PlaylistContext);

  return context;
};

export const PlaylistProvider = ({ children }) => {
  const [songs, setSongs] = useState(() => getSongs());
  const getPlaylistByMood = useCallback(
    (mood) => songs.filter((song) => song.Mood == mood),
    [songs],
  );
  const getPlaylistByArtist = useCallback(
    (artist) => songs.filter((song) => song.Artist == artist),
    [songs],
  );

  const getPlaylistByTitle = (title) => {
    const playlist = playlists.find(
      (item) => item.playlist && item.playlist["Title"] == title,
    );
    return playlist ? playlist.playlist : null;
  };

  let initialPlaylists = useMemo(
    () => [
      {
        id: 1,
        playlist: {
          Title: "Mood",
          Items: [
            { id: 1, Track: "Relaxing", Free: true },
            { id: 2, Track: "Happy" },
            { id: 3, Track: "Sad" },
          ],
          function: getPlaylistByMood,
        },
      },
      {
        id: 2,
        playlist: {
          Title: "Top_bands",
          Items: [
            { id: 1, Track: "H.I.M" },
            { id: 2, Track: "The 69 eyes" },
            { id: 3, Track: "Ghost" },
          ],
          function: getPlaylistByArtist,
        },
      },
    ],
    [songs, getPlaylistByMood, getPlaylistByArtist, getPlaylistByTitle],
  );

  const playlists = useMemo(() => initialPlaylists, [initialPlaylists]);

  const getPlaylists = () => playlists;
  const getPlaylistByID = (id) => {
    const playlist = playlists.find((playlist) => playlist.id == id);
    return playlist ? playlist : null;
  };

  const getSong = (id) => songs.find((song) => song.id == id);
  const getSongByInfo = (artist, track) =>
    songs.find((song) => {
      if (
        song.Artist == artist.replaceAll("-", " ") &&
        song.Track == track.replaceAll("-", " ")
      )
        return song;
    });
  const deleteSong = (id) => {
    setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
  };
  const getSongsByPlaylist = (playlist) =>
    songs.filter((song) => {
      return song.Playlists?.includes(playlist);
    });
  const getArtwork = (artwork) => {
    if (artwork)
      return new URL(`../assets/artworks/${artwork}.png`, import.meta.url).href;
    else return noArt;
  };
  const getPrevNextSong = (currentPlaylist, currentSongID) => {
    const song = currentPlaylist.find((song) => {
      if (song.id == currentSongID) return song;
    });
    const index = currentPlaylist.indexOf(song);
    if (index == 0) return currentPlaylist.slice(0, 2);
    else if (index == currentPlaylist.length - 1) return "2";
    // currentPlaylist.slice(-1, -2);
    else return currentPlaylist.slice(index - 1, 4);
  };

  const value = useMemo(
    () => ({
      playlists,
      getPlaylists,
      getPlaylistByID,
      getPlaylistByTitle,
      getSong,
      getSongByInfo,
      getSongsByPlaylist,
      deleteSong,
      getArtwork,
      getPrevNextSong,
      getPlaylistByArtist,
    }),
    [playlists, songs],
  );

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};
