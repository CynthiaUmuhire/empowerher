import { useEffect, useState } from "react";
import { stories, users } from "../api";

export default function Profile() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const result:any = await users.getDatas();
      setData(result);
    })();
  }, []);

  function addStory(data: string) {
    (async () => {
      stories.deleteData(data);
    })();
  }

  return (
    <div>
      <button
        onClick={() => addStory("wKKYV8ph7GNErN62mg7M")}
        className="bg-red-500  p-4 rounded-2stories."
      >
        Add New Collection{" "}
      </button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
