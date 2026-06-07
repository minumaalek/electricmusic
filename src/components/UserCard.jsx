import { useNavigate } from "..";
function UserCard({ User }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-1 items-center text-base font-bold cursor-pointer"
      onClick={() => navigate(`/user/${User}`)}
    >
      <div className="profilePicture size-8"></div>
      <span>{User}</span>
    </div>
  );
}

export default UserCard;
