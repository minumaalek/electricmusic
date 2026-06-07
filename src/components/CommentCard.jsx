import { UserCard } from "..";
function CommentCard({ User, Text }) {
  return (
    <div className="w-full flex flex-col gap-2 bg-transparent p-5 ">
      <div className="">
        <UserCard User={User} />
        <span>{Text}</span>
      </div>
    </div>
  );
}

export default CommentCard;
