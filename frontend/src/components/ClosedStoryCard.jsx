import { Link } from "react-router-dom"
function ClosedStoryCard({ title, story, image }) {
    return (
        <article className="group max-w-md">
            <img
                alt="sarah"
                src={image}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
                <Link to="1">
                    <h3 className="text-lg font-medium text-gray-900">
                       {title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                       {story}
                    </p>
                    <span className="text-violet-950">
                        Read more -&gt;
                    </span>
                </Link>
            </div>
        </article >
    )
}

export default ClosedStoryCard
