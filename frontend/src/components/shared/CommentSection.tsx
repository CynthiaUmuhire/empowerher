import { AiFillHeart } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CommentsData } from "../../api/api";
export default function CommentSection({ author, content, post_date }:CommentsData) {
  console.log(post_date);
  
  return (
    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <header className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center gap-2 mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <FaUser/>
            {author}
          </p>
          <p className="text-sm text-primary-800 dark:text-gray-400">
            <time>{new Date(JSON.stringify(post_date)).toLocaleDateString()}</time>
          </p>
        </div>
      </header>

      <p className="text-primary-800 dark:text-gray-400">{content}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex gap-1 items-center text-lg text-primary-800  dark:text-gray-400 font-medium"
        >
          Like
          <AiFillLike />
        </button>
        <button
          type="button"
          className="flex gap-1 items-center text-lg text-primary-200  dark:text-gray-400 font-medium"
        >
          <AiFillHeart /> 123
        </button>
      </div>
    </article>
  );
}
