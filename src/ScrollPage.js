import { doc, setDoc, getFirestore, onSnapshot, collection, deleteDoc, orderBy, query, limit } from "firebase/firestore";
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
  const container = useRef(null);
  const db = getFirestore();
  const [emoji, setEmoji] = useState();
  const [respond, setRespond] = useState();

  const submit = (e) => {
    e.preventDefault();
    if (input.length && input.length < 1000) {
      const time = new Date().getTime().toString();
      setDoc(doc(db, "msg", time), {
        user: activeUser.username,
        text: input,
        time: time,
        emoji: {},
        respond: respond?respond.lastChild.textContent:""
      });
    }
    setInput("");
    setRespond()
  };

  const q = query(collection(db, "msg"), limit(20), orderBy("time", "desc"));

  const fetchData = () => {
    onSnapshot(q, (snapshot) => {
      let msgs = [];
      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      msgs.reverse();
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
    if (emoji === e.currentTarget) {
      setEmoji();
    } else {
      setEmoji(e.currentTarget);
    }
  };

  const displayMsgs = () => {
    return allMsgs.map((item, i) => {
      if (allMsgs[i - 1]?.user === item.user) {
        return <Message reply={reply} item={item} allMsgs={allMsgs} key={item.id} remove={remove} firebaseConfig={firebaseConfig} activeUser={activeUser} name={undefined} getEmoji={getEmoji} emoji={emoji} />;
      } else {
        return <Message reply={reply} item={item} allMsgs={allMsgs} key={item.id} remove={remove} firebaseConfig={firebaseConfig} activeUser={activeUser} name={item.user} getEmoji={getEmoji} emoji={emoji} />;
      }
    });
  };

  window.addEventListener("resize", () => setHeight(window.innerHeight));

  useEffect(() => {
    container.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [allMsgs]);

  const reply = (e) => {
    setRespond(e.currentTarget.parentElement.parentElement.parentElement.firstChild);
  };
 console.log(respond?.lastChild.textContent)
  return (
    <div className="flex flex-col flex-1 justify-between mx-2" style={{ height: `calc(${height}px - 72px` }}>
      <Scrollbars>
        {allMsgs && (
          <div ref={container} className="bg-white overflow-y-scroll">
            {displayMsgs()}
          </div>
        )}
      </Scrollbars>
      <form className="flex m-2 ml-0" onSubmit={submit}>
        {respond && (
          <div className=" text-white flex">
            <p className="text-3xl m-auto cursor-pointer" onClick={()=>setRespond()}>❌</p>
            <p className="bg-blue w-fit rounded-3xl p-2 rounded-tl-none">{respond?.lastChild.textContent}</p>
          </div>
        )}

        <input type="text" className="flex-1 border-2 border-black p-1 rounded-lg ml-2" value={input} onChange={(e) => setInput(e.target.value)} />

        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" onClick={submit} />
      </form>
    </div>
  );
}

// getDocs(collection(db, "msg")).then((snapshot) => {
//   let arr = [];
//   snapshot.docs.forEach((doc) => {
//     if (new Date().getTime() - Number(doc.data().time) > 60000) {
//       arr.push(doc.data())
//     }
//   });
//   arr.forEach(item=>{
//     deleteDoc(doc(db, "msg", item.time))
//   })
// });
