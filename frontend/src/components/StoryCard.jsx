import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./shared/Button";

export default function StoryCard({ title, image, id, content, author }) {
  return (
    <article className="flex flex-col shadow my-4">
      <div className="hover:opacity-75 h-60">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white flex flex-col gap-1 justify-start p-6">
        <a className="text-blue-700 text-sm font-bold uppercase pb-4">
          Technology
        </a>
        <p className="text-xl font-bold truncate  hover:text-gray-700 pb-4">
          {title}
        </p>
        <p className="text-sm pb-3">
          By <span className="font-semibold hover:text-gray-800">{author}</span>
        </p>
        <p href="#" className="pb-6 line-clamp-3">
          {content}
        </p>
      </div>
      <Link to={id}>
        <Button text="Read more" icon={AiOutlineArrowRight} variant="primary" />
      </Link>
    </article>
  );
}
