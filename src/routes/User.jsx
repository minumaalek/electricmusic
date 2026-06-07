import { useLocation, useNavigate } from "..";
import { getUserByUsername } from "../js/users";
function User() {
  const username = useLocation().pathname.split("/")[2];
  const user = getUserByUsername(username);
  const thisUsername = localStorage.getItem("username");
  const isUser = thisUsername == user.username ? true : false;
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center text-black user flex-col">
      <div className="flex flex-col items-center justify-center gap-4 border-2 border-gray-300 p-5 rounded-lg shadow-xl">
        <div className=" size-40 profilePicture"></div>
        <div className=" flex flex-col justify-center items-center">
          <h2>{username}</h2>
          <h3>{user?.about}</h3>
        </div>
        {isUser && (
          <button onClick={() => navigate("/preferences/profile")}>Edit</button>
        )}
      </div>
      {/* <h2>Last activity</h2>
      <h2>Favorites</h2> */}
    </div>
  );
}

export default User;
