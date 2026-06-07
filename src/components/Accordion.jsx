import { useState, useParams, PlaylistItem, useSearchParams } from "..";

const Accordion = ({ title, items }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [accOpen, setAccOpen] = useState(
    searchParams.get("title") == title ? true : false,
  );
  // console.log(searchParams.get("title"));
  const { playlistTitle } = useParams();

  return (
    <div className="accordion w-full mx-auto space-y-2">
      <div className="border border-gray-200 overflow-hidden">
        <div>
          <div
            onClick={() => {
              setAccOpen((prev) => !prev);
              searchParams.get("title") == title
                ? setSearchParams("")
                : setSearchParams({ title });
            }}
            className="w-full cursor-pointer px-4 py-3 text-right flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium">{title}</span>
            <span
              className={`transform transition-transform ${
                accOpen && "rotate-180"
              }`}
            >
              ▼
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              accOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {items.map((song) => {
              return (
                <PlaylistItem
                  song={song}
                  playlistTitle={playlistTitle}
                  key={song.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
