import { useState } from "../..";
function Toggle({ Active }) {
  const [active, setActive] = useState(Active);

  return (
    <div
      className={`button cursor-pointer w-12 h-6 flex items-center toggle`}
      onClick={() => setActive((prev) => !prev)}
    >
      <div
        className={` size-4 rounded-full ${active ? "translate-x-6 bg-white" : "bg-gray-500"} transition-all duration-200`}
      ></div>
    </div>
  );
}

export default Toggle;
