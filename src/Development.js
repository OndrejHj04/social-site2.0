import { useEffect, useState } from "react";
import Patch from "./Patch";

export default function Development() {
  const [repo, setRepo] = useState();
  const [height, setHeight] = useState(window.innerHeight);

  window.addEventListener("resize", () => setHeight(window.innerHeight))
  
  useEffect(() => {
    fetch("https://api.github.com/repos/OndrejHj04/social-site2.0/commits?per_page=100")
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, []);

  const data = () => {
    let object = {};
    repo?.forEach((item, i) => {
      if (item.commit.message.split("\n\n")[0].length === 10 || item.commit.message.split("\n\n")[0][10] === "0" || item.commit.message.split("\n\n")[0].length === 11) {
        object = { ...object, [item.commit.message.split("\n\n")[0]]: { me: item, children: [] } };
      } else {
        object[Object.keys(object)[Object.keys(object).length - 1]]?.children.push(item);
      }
    });

    return object;
  };

  const getPatches = () => {
    return (
      data() &&
      Object.keys(data()).map((item) => {
        return <Patch key={item} item={data()[item]} />;
      })
    );
  };

  return <div className="max-w-5xl mx-auto overflow-scroll px-1" style={{height: `calc(${height}px - 72px)`}}>{getPatches()}</div>;
}
