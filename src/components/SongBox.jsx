import { usePlaylist, useNavigate, StarIcon } from "..";

function SongBox({ Artwork, isFree }) {
  const { getArtwork } = usePlaylist();

  const navigate = useNavigate();
  return (
    <div>
      <div className="size-full relative overflow-hidden">
        <div
          // onMouseOver={() => console.log("star hovered")}
          className={`bg-white h-6 lg:h-12 w-20 border-b-2 border-black absolute rotate-45 -right-8 -top-1 lg:-top-4 ${isFree ? "hidden" : "flex"} p-1 items-end justify-center`}
        >
          <StarIcon />
        </div>
        {/* <div className="absolute flex flex-col">
          <div className=" size-5 bg-black/80 rotate-45"> </div>
          <div className="h-10 w-20 bg-black/80"></div>
        </div> */}
        <img
          className="size-full shadow-sm shadow-black"
          src={getArtwork(Artwork)}
          alt=""
        />
      </div>
    </div>
  );
}

export default SongBox;
