import { doc, setDoc, getFirestore, onSnapshot, collection, deleteDoc, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { initializeApp } from "firebase/app";

export default function ScrollPage({ firebaseConfig, activeUser }) {
  const [input, setInput] = useState("");
  const [allMsgs, setAllMsgs] = useState();
  const tempData = useRef()
  initializeApp(firebaseConfig);

  const db = getFirestore();

  const submit = (e) => {
    e.preventDefault();
    if (input.length) {
      const time = new Date().getTime().toString();
      setDoc(doc(db, "msg", time), {
        user: activeUser.username,
        text: input,
        time: time,
      });
    }
    setInput("");
  };

  const q = query(collection(db, "msg"), orderBy("time", "asc"));

  const fetchData = () => {
    onSnapshot(q, (snapshot) => {
      let msgs = [];
      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setAllMsgs(msgs);
    });
  };

  tempData.current = fetchData;

  useEffect(() => {
    tempData.current();
  }, [db]);

  const remove = (id, name) => {
    activeUser.username === name && deleteDoc(doc(db, "msg", id));
  };

  const displayMsgs = () => {
    return allMsgs.map((item) => {
      return <Message item={item} key={item.id} remove={remove} activeUser={activeUser} />;
    });
  };

  return (
    <div className="flex flex-col flex-1 justify-between">
      {allMsgs && <div className="bg-white m-1 flex-1">{displayMsgs()}</div>}
      <form className="flex m-2" onSubmit={submit}>
        <input type="text" className="w-full border-2 border-black p-1 rounded-lg" value={input} onChange={(e) => setInput(e.target.value)} />
        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" onClick={submit} />
      </form>
    </div>
  );
}
