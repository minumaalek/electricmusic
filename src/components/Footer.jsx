import { InstagramIcon, YoutubeIcon, TelegramIcon } from "..";
function Footer() {
  return (
    <div className="w-full bg-black h-full text-white flex flex-col md:grid grid-cols-2 p-5 md:p-10">
      {/* <div>Quick access</div>
      <div>New songs</div>
      <div>Last activities</div> */}
      {/* <div className="flex flex-col items-start  p-10">
        <h2 className="text-xl">Quick access</h2>
      </div> */}
      <div className="flex flex-col gap-1 w-full items-center justify-center">
        <span className="text-xl">Need any song? just give its name!</span>
        <p className="text-justify">
          We do our best to find it in high quality.
        </p>
        {/* <p className="text-justify">
            We're honored to assemble golden oldies.
          </p> */}
        <div className="flex">
          <input type="text" placeholder="Song and artist..." />
          <button className="rounded-none bg-gray-200 hover:bg-gray-500 text-gray-500">
            Send
          </button>
        </div>
      </div>
      <div className="flex gap-2 w-full items-center mt-10">
        <div className="w-full h-full flex flex-col items-center justify-start">
          <span>Keep in touch with us...</span>
          <div className="socialMedia flex gap-2">
            <YoutubeIcon />
            <TelegramIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
