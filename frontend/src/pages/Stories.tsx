import { useOutletContext } from "react-router-dom";
import StoryCard from "../components/StoryCard";
import { Story } from "../api/api";

export default function Stories() {
  const stories:Story[] = useOutletContext();
  
  return (
    <section className="  max-w-screen-2xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {stories.map((story) => {
          return <StoryCard key={story.id} {...story} />;
        })}
      </section>
    </section>
  );
}
