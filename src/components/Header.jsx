import Logo from "../Logo";
// import Quote from "./Quote";
function Header() {
  return (
    <div className="bg-black text-white w-full h-full flex flex-col justify-center items-center p-3 rounded-none mt-4">
      <div className="size-80 sm:size-5/6">
        <Logo white />
      </div>
      {/* <h1>Floating between life and spark...</h1> */}
    </div>
  );
}

export default Header;
