import { PauseIcon, PlayIcon } from "..";
function Loading() {
  return (
    <div className="h-screen w-screen z-50 fixed flex items-center justify-center">
      {/* <div className="rounded-full size-10 border-8 border-black animate-bounce"></div> */}
      <div className="animate-bounce ">
        <PauseIcon />
        {/* <PlayIcon /> */}
      </div>
    </div>
  );
}

export default Loading;
