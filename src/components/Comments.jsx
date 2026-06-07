import CommentCard from "./CommentCard";
import { getUserById } from "../js/users";

function Comments({ items }) {
  const comments = items ? items : [];
  return (
    <div className="w-full">
      <div className="flex gap-1 items-center">
        <div className="profilePicture size-12"></div>
        <textarea
          className="w-5/6 h-12 resize-none p-3 outline-none bg-gray-100"
          placeholder="Leave a comment..."
          name=""
          id=""
        ></textarea>
      </div>
      <div className="mt-10 bg-slate-200 w-full gap-2 flex flex-col">
        {comments.length != 0 ? (
          comments.map((comment) => {
            const { username } = getUserById(comment.UserID);
            return (
              <div
                key={comment.id}
                className="w-full rounded-none bg-gray-300 flex flex-col gap-3"
              >
                <CommentCard User={username} Text={comment.Text} />
                <div className="px-4 ">
                  {comment.Answers.map((answer) => {
                    const { username } = getUserById(answer.UserID);

                    return <CommentCard User={username} Text={answer.Text} />;
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className=" h-32 flex items-center justify-center">
            <i className="text-gray-700">Be the first...</i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
