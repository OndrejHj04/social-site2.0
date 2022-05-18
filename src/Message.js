import { useRef } from "react";
import Reaction from "./Reaction";
export default function Message({ item, remove, activeUser, name, getEmoji, emoji }) {
  const milis = () => {
    const date = new Date(Number(item.time));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();

    return `${day}. ${month}. ${hours}:${minutes}`;
  };

  const conatainer = useRef(null)

  return (
    <div className={`w-full break-words group relative cursor-pointer ${emoji === conatainer.current&&"mb-5"}`} onClick={getEmoji} ref={conatainer}>
      {emoji === conatainer.current &&<Reaction position={activeUser.username === item.user} />}

      {name && <h1 className={`${activeUser.username === item.user && "text-right"}`}>{item.user === activeUser.username ? "you" : name}</h1>}
      <div className={`${activeUser.username === item.user && "justify-end"} break-words flex`}>
        <h1 className={`bg-blue text-white my-1 p-2 mb-auto rounded-3xl ${activeUser.username === item.user && "order-2"} ${activeUser.username === item.user ? "rounded-tr-none" : "rounded-tl-none"}`} style={{ maxWidth: "80%" }}>
          {item.text}
        </h1>
        <div className="flex mb-auto my-auto flex-wrap mx-1">
          <div className="flex">
            <img src={require("./img/trash.png")} alt="" width="25" className={`group-hover:scale-y-100 m-auto scale-y-0 transition-all ${activeUser.username !== item.user && "hidden"}`} onClick={() => remove(item.id, item.user)} />
            <p className="my-auto group-hover:scale-x-100 scale-x-0 transition-all text-center">{milis()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
