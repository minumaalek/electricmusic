import { news } from "../js/news";
import { Link } from "react-router-dom";
import { PlayIcon, CloseIcon, useState, MoreIcon } from "..";
function News() {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState({
    Title: "",
    Content: "",
  });
  // if (!showInfo) setInfo(false);
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col-reverse items-center justify-center gap-3 news">
      <div
        className={`info ${showInfo ? "opacity-100 z-10" : "opacity-0 -z-10"} `}
        onClick={() => setShowInfo(false)}
      >
        <div
          className={`w-5/6 z-20 absolute md:w-1/2 bg-white shadow-lg shadow-black rounded-lg p-4 ${showInfo ? "opacity-100" : "opacity-0"} `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full relative flex">
            <div
              className="absolute top-2 right-2"
              onClick={() => setShowInfo(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="w-full flex mt-4 p-1 text-center items-center border-b-2 border-gray-400">
            <h2>{info.Title}</h2>
          </div>
          <div className="w-full h-full">
            <p className="text-justify font-medium">{info.Content}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full fixed flex items-center justify-center"></div>

      {news.map((info) => {
        return (
          <div
            key={info.id}
            className={`w-5/6 md:w-1/2 h-22 bg-gray-200 shadow-md shadow-black flex flex-col justify-between p-2 relative`}
          >
            <div className="flex">
              <h2 className="text-xl">{info.Title}</h2>
              <div className="absolute top-0 right-0 md:right-6 h-full flex items-center justify-center">
                <b
                  className="text-xl mr-6 cursor-pointer"
                  onClick={() => {
                    setShowInfo(true);
                    setInfo({
                      Title: info.Title,
                      Content: info.Content,
                    });
                  }}
                >
                  <MoreIcon black />
                </b>
              </div>
            </div>
            <span className="text-sm">{info.Date}</span>
          </div>
        );
      })}
    </div>
  );
}

export default News;
