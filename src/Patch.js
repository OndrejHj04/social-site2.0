import { useState } from "react";

export default function Patch({ item }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex justify-between text-3xl">
        <h1 className="my-auto">{`${item.me.commit.committer.date.substring(8, 10)}. ${item.me.commit.committer.date.substring(5, 7)}.`}</h1>
        <h1 className="my-auto">{item.me.commit.message.split("\n\n")[0]}</h1>
        <img src={require("./img/more.png")} alt="" width="65" onClick={() => setShow(!show)} className={`transition-all ${show ? "scale-110 " : "scale-90"}`} />
      </div>
      <hr />


        {show&&item.children.map((item) => {
          return (
            <div className={`flex text-xl w-11/12 mx-auto transition-all`}>
              <h1 className="">{`${item.commit.committer.date.substring(8, 10)}. ${item.commit.committer.date.substring(5, 7)}.`}</h1>
              <h1 className="">{item.commit.message.split("\n\n")[0]}</h1>
              <h1 className="mx-auto">{item.commit.message.split("\n\n")[1]}</h1>
            </div>
          );
        })}

    </>
  );
}
