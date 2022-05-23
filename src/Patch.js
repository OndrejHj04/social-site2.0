import { useState } from "react";

export default function Patch({ item }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-between text-3xl my-1" onClick={() => setShow(!show)}>
        <h1 className="my-auto">{`${item.me.commit.committer.date.substring(8, 10)}. ${item.me.commit.committer.date.substring(5, 7)}.`}</h1>
        <h1 className="my-auto">{item.me.commit.message.split("\n\n")[0].replace("Patch", "Version")}</h1>
        <img src={require("./img/more.png")} alt="" width="55"  className={`transition-all ${show ? "rotate-180" : "rotate-0"} ${!item.children.length&&"scale-0"}`} />
      </div>
      <hr />

        {show&&item.children.map((item) => {
          return (
            <div key={item.sha} className={`flex text-xl w-11/12 mx-auto transition-all`}>

              <h1 className="">{item.commit.message.split("\n\n")[0]}</h1>
              <h1 className="ml-3">{item.commit.message.split("\n\n")[1]}</h1>
            </div>
          );
        })}

    </>
  );
}
