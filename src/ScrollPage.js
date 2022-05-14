import { doc, setDoc, getFirestore, onSnapshot, collection, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Message from "./Message";
import { initializeApp } from "firebase/app";
import { nanoid } from "nanoid";

export default function ScrollPage({ firebaseConfig, activeUser }) {
  const [input, setInput] = useState("");
  const [allMsgs, setAllMsgs] = useState();

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const submit = (e) => {
    e.preventDefault();
    if (input.length) {
      const id = nanoid();
      setDoc(doc(db, "msg", id), {
        user: activeUser.username,
        text: input,
        id: id
      });
    }
    setInput("");
  };

  useEffect(() => {
    onSnapshot(collection(db, "msg"), (snapshot) => {
      let msgs = [];
      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setAllMsgs(msgs);
    });
  }, []);

  const remove = (id, name) =>{
    activeUser.username === name&&deleteDoc(doc(db, "msg", id))
  }

  const displayMsgs = () => {
    return allMsgs.map((item) => {
      return <Message item={item} key={item.id} remove={remove} activeUser={activeUser}/>;
    });
  };

  return (
    <div className="flex flex-col flex-1 justify-between">
      {allMsgs&&<div className="bg-white overflow-y-scroll flex-1 ">{displayMsgs()}</div>}
      <form className="flex m-2" onSubmit={submit}>
        <input type="text" className="w-full border-2 border-black p-1 rounded-lg" value={input} onChange={(e) => setInput(e.target.value)} />
        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" onClick={submit} />
      </form>
    </div>
  );
}
