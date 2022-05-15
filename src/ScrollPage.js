import { doc, setDoc, getFirestore, onSnapshot, collection, deleteDoc, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { initializeApp } from "firebase/app";
import { Scrollbars } from "react-custom-scrollbars";

export default function ScrollPage({ firebaseConfig, activeUser }) {
  const [input, setInput] = useState("");
  const [allMsgs, setAllMsgs] = useState();
  const tempData = useRef();
  const [height, setHeight] = useState(window.innerHeight);
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

  window.addEventListener("resize", () => setHeight(window.innerHeight));

  return (
    <div className="flex flex-col flex-1 justify-between mx-2" style={{ height: `calc(${height}px - 72px` }}>
      <Scrollbars>{allMsgs && <div className="bg-white overflow-y-scroll">{displayMsgs()}</div>}</Scrollbars>
      <form className="flex m-2" onSubmit={submit}>
        <input type="text" className="w-full border-2 border-black p-1 rounded-lg" value={input} onChange={(e) => setInput(e.target.value)} />
        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" onClick={submit} />
      </form>
    </div>
  );
}
