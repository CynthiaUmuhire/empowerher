import { useEffect, useState } from "react";
import { stories, users } from "../api";

export default function Profile() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const result:any = await users.getDatas();
  //     setData(result);
  //   })();
  // }, []);

  function addStory() {
    (async () => {
      // stories.deleteData(data);
      const res = await stories.getDatas()
     setData (res)
    })();
  }

  return (
    <div>
      <button
        onClick={() => addStory()}
        className="bg-red-500  p-4 rounded-2stories."
      >
        Add New Collection{" "}
      </button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
