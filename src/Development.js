import { data } from "autoprefixer";
import { useEffect, useState } from "react";

export default function Development() {
  const [repo, setRepo] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/OndrejHj04/social-site2.0/commits?per_page=100")
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, []);

  const axes = () => {
    let arr = [];

    repo?.map((item) => {
      const day = item.commit.author.date.substring(8, 10);
      const month = item.commit.author.date.substring(5, 7);
      const d = `${day}. ${month}.`;
      arr = [...arr, d];

    });
    return arr
  };

  console.log(axes())

  return <div className="max-w-5xl mx-auto"></div>;
}
