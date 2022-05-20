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

    return `${day}. ${month}. ${hours}:${minutes}`;
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
    <div className={`w-full break-words group relative cursor-pointer ${emoji === conatainer.current && "mb-6"}`} onClick={getEmoji} ref={conatainer}>
      {emoji === conatainer.current && <Reaction pickEmoji={pickEmoji} removeEmoji={removeEmoji} position={activeUser.username === item.user} />}

      {name && <h1 className={`${activeUser.username === item.user && "text-right"}`}>{item.user === activeUser.username ? "you" : name}</h1>}
      <div className={`${activeUser.username === item.user && "justify-end"} break-words flex`}>
        <h1 className={`bg-blue text-white text-lg my-1 p-2 mb-auto rounded-3xl relative ${activeUser.username === item.user && "order-2"} ${activeUser.username === item.user ? "rounded-tr-none" : "rounded-tl-none"}`} style={{ maxWidth: "80%" }}>
          {item.respond && (
            <div className="flex w-full">
              <div className="bg-slate-300 text-black p-1 text-base rounded-3xl rounded-tr-none overflow-hidden">{item.respond}</div>
              <img src={require("./img/reply.png")} className="mb-auto ml-1" width="20" alt=""/>
            </div>
          )}
          {m && (
            <div className={`absolute -top-3 ${item.user === activeUser.username ? "right-0" : "left-0"} rounded-xl z-40 flex flex-row`}>
              {Object.keys(m.emoji)
                .sort()
                .map((item, i) => {
                  return <p key={item}>{m.emoji[item]}</p>;
                })}
            </div>
          )}
          {item.text}
        </h1>
        <div className="flex mb-auto my-auto flex-wrap mx-1">
          <div className="flex flex-wrap">
            <img src={require("./img/trash.png")} alt="" width="30" className={`group-hover:scale-y-100 m-auto scale-y-0 transition-all ${activeUser.username !== item.user && "hidden"}`} onClick={() => remove(item.id, item.user)} />
            <img src={require("./img/reply.png")} alt="" width="30" className="mx-auto scale-0 group-hover:scale-100 transition-all" onClick={reply} />
            <p className="my-auto group-hover:scale-x-100 scale-x-0 transition-all text-center">{milis()}</p>
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
