import { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import Reaction from "./Reaction";
export default function Message({ item, remove, activeUser, name, getEmoji, emoji, firebaseConfig, allMsgs, reply }) {
  const milis = () => {
    const date = new Date(Number(item.time));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();

    if (new Date().getMonth() + 1 === month && new Date().getDate() === day) {
      return `today ${hours}:${minutes}`;
    } else if (new Date().getDate() - 1 === day) {
      return `yesterday ${hours}:${minutes}`;
    } else {
      return `${day}. ${month}. ${hours}:${minutes}`;
    }
  };

  initializeApp(firebaseConfig);
  const db = getFirestore();
  const conatainer = useRef(null);

  const m = allMsgs.find((i) => i.time === item.time);

  const pickEmoji = (e) => {
    updateDoc(doc(db, "msg", item.time), {
      emoji: { ...m.emoji, [activeUser.username]: e.target.textContent },
    });
  };

  const removeEmoji = () => {
    updateDoc(doc(db, "msg", item.time), {
      emoji: { ...m.emoji, [activeUser.username]: delete m.emoji[activeUser.username] },
    });
  };

  return (
    <div className={`w-full break-words group relative my-0.5 cursor-pointer ${emoji === conatainer.current && ""}`} onClick={getEmoji} ref={conatainer}>

      <div className={`absolute z-30 -bottom-4 transition-all ${emoji === conatainer.current ? "scale-100" : "scale-0"} ${activeUser.username === item.user?"right-1 ":"left-1"}`}>
        <Reaction pickEmoji={pickEmoji} removeEmoji={removeEmoji} />
      </div>

      {name && <h1 className={`${activeUser.username === item.user && "text-right"}`}>{item.user === activeUser.username ? "you" : name}</h1>}
      <div className={`${activeUser.username === item.user && "justify-end"} break-words flex`}>
        <h1 className={`bg-blue text-white text-lg my-1 p-2 mb-auto rounded-3xl relative ${activeUser.username === item.user && "order-2"} ${activeUser.username === item.user ? "rounded-tr-none" : "rounded-tl-none"}`} style={{ maxWidth: "80%" }}>
          {item.respond && (
            <div className="flex w-full">
              <div className="bg-slate-300 text-black p-1 text-base rounded-3xl rounded-tr-none overflow-hidden">{item.respond}</div>
              <img src={require("./img/reply.png")} className="mb-auto ml-1" width="20" alt="" />
            </div>
          )}
          {m && (
            <div className={`absolute -top-3 ${item.user === activeUser.username ? "right-0" : "left-0"} rounded-xl z-40 flex flex-row`}>
              {Object.keys(m.emoji)
                .sort()
                .map((item) => {
                  return <p key={item}>{m.emoji[item]}</p>;
                })}
            </div>
          )}
          {item.text}
        </h1>
        <div className="flex mb-auto mb-auto flex-wrap mx-1">
          <div className={`flex flex-wrap transition-all ${emoji === conatainer.current ? "scale-100" : "scale-0"}`}>
            <img src={require("./img/trash.png")} alt="" width="30" onClick={() => remove(item.id, item.user)} />
            <img src={require("./img/reply.png")} alt="" width="30" onClick={reply} />
            <p className="my-auto ">{milis()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// if(i<4){
//   return <p key={item}>{m.emoji[item]}</p>
// }else if(i === Object.keys(m.emoji).length-1){
//   return <p className="text-black">+{Object.keys(m.emoji).length-4}</p>
// }
