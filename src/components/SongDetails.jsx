import { usePlaylist, SongBox } from "..";
import SongTool from "./SongTool";

function SongDetails({ song }) {
  const spanMap = [
    { id: 1, Title: "Track", Value: song?.Track },
    { id: 2, Title: "Artist", Value: song?.Artist },
    { id: 3, Title: "Released", Value: song?.Year },
    { id: 4, Title: "Album", Value: song?.Album },
    { id: 5, Title: "Genre", Value: song?.Genre },
  ];
  const { getArtwork } = usePlaylist();

  return (
    <div className="songDetails w-full flex flex-col items-center justify-center">
      <div className="flex md:flex-col xl:flex-row justify-start items-center w-full gap-3">
        <div className="flex w-36 md:min-w-56 lg:min-w-96 xl:min-w-72 justify-center items-center">
          <SongBox isFree={song.Free} Artwork={song.Artwork} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center w-60 md:w-80 md:p-5 p-1 md:items-center lg:items-center xl:items-start gap-2">
            {spanMap.map((span) => {
              return (
                <span className="md:text-lg text-black truncate" key={span.id}>
                  {span.Title}: {span.Value}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <SongTool song={song} />
      </div>
    </div>
  );
}

export default SongDetails;
