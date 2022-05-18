import { doc, setDoc, getFirestore, onSnapshot, collection, deleteDoc, orderBy, query, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { initializeApp } from "firebase/app";
import { Scrollbars } from "react-custom-scrollbars";
import Reaction from "./Reaction";

export default function ScrollPage({ firebaseConfig, activeUser }) {
  const [input, setInput] = useState("");
  const [allMsgs, setAllMsgs] = useState();
  const tempData = useRef();
  const [height, setHeight] = useState(window.innerHeight);
  initializeApp(firebaseConfig);
  const container = useRef(null);
  const db = getFirestore();
  const [emoji, setEmoji] = useState();

  const submit = (e) => {
    e.preventDefault();
    if (input.length && input.length < 1000) {
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

  const getEmoji = (e) => {
    if (emoji) emoji.classList.remove("active");
    e.currentTarget.classList.add("active");

    setEmoji(e.currentTarget);
  };
  console.log(emoji);
  const displayMsgs = () => {
    return allMsgs.map((item, i) => {
      if (allMsgs[i - 1]?.user === item.user) {
        return <Message item={item} key={item.id} remove={remove} activeUser={activeUser} name={undefined} getEmoji={getEmoji} />;
      } else {
        return <Message item={item} key={item.id} remove={remove} activeUser={activeUser} name={item.user} getEmoji={getEmoji} />;
      }
    });
  };

  window.addEventListener("resize", () => setHeight(window.innerHeight));

  useEffect(() => {
    container.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [allMsgs]);

  return (
    <div className="flex flex-col flex-1 justify-between mx-2" style={{ height: `calc(${height}px - 72px` }}>
      <Scrollbars>
        {allMsgs && (
          <div ref={container} className="bg-white overflow-y-scroll">
            {displayMsgs()}
          </div>
        )}
      </Scrollbars>
      <form className="flex m-2" onSubmit={submit}>
        <input type="text" className="w-full border-2 border-black p-1 rounded-lg" value={input} onChange={(e) => setInput(e.target.value)} />
        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" onClick={submit} />
      </form>
    </div>
  );
}
