import { useState } from "..";
function AddNewSong() {
  const [getSong, setSong] = useState({
    Track: "",
    Artist: "",
    Album: "",
    Genre: "",
  });
  const setSongDetails = (event) => {
    setSong({ ...getSong, [event.target.name]: event.target.value });
  };
  const addNewSong = (event) => {
    event.preventDefault();
    console.log(getSong);
  };
  return (
    <div className="container">
      <form onSubmit={addNewSong}>
        <div className="size-80 bg-black rounded-xl shadow-sm flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Track..."
              name="Track"
              onChange={setSongDetails}
              value={getSong.Track}
            />
            <input
              type="text"
              placeholder="Artist..."
              name="Artist"
              onChange={setSongDetails}
              value={getSong.Artist}
            />
            <input
              type="text"
              placeholder="Album..."
              name="Album"
              onChange={setSongDetails}
              value={getSong.Album}
            />
            <select
              className="text-black"
              name={"Genre"}
              onChange={setSongDetails}
              value={getSong.Genre}
            >
              <option value="Metal">Metal</option>
              <option value="Rock">Rock</option>
              <option value="Blues">Blues</option>
              <option value="Pop">Pop</option>
              <option value="Unknown">Unknown</option>
            </select>
            <button type="submit" className="bg-white">
              add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewSong;
