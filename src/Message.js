export default function Message({ item, remove, activeUser, name }) {
  const milis = () => {
    const date = new Date(Number(item.time));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();

    return `${day}. ${month}. ${hours}:${minutes}`;
  };
  return (
    <div className=" w-full break-words my-1 group ">
      {name && <h1 className={`${activeUser.username === item.user&&"text-right"}`}>{name}</h1>}
      <div className={`${activeUser.username === item.user&&"justify-end"} break-words flex`}>
        <h1 className={`bg-blue text-white p-2 rounded-3xl ${activeUser.username === item.user&&"order-2"} ${activeUser.username === item.user?"rounded-tr-none":"rounded-tl-none"}`} style={{maxWidth: "80%"}} >{item.text}</h1>
        <div className="flex mb-auto text-lg my-auto ">
          <img src={require("./img/trash.png")} alt="" width="30" className={`group-hover:scale-y-100 scale-y-0 transition-all ${activeUser.username !== item.user&&"invisible"}`} onClick={() => remove(item.id, item.user)}/>
          <p className="my-auto group-hover:scale-x-100 scale-x-0 transition-all">{milis()}</p>
        </div>
      </div>
    </div>
  );
}

// <div className={` flex group ${activeUser.username === item.user&&"justify-end"}`} id={item.time}>
//   <div className={`flex flex-col ${activeUser.username === item.user&&"order-2"}`}>
//     {name&&<div className={`flex justify-between ${activeUser.username === item.user&&"ml-auto"}`} >
//       <h1 >{activeUser.username === name?"You":name}</h1>
//     </div>}
//     <div className={`bg-blue text-white p-2 text-lg w-fit rounded-2xl ${activeUser.username === item.user?"ml-auto rounded-br-none": "rounded-bl-none"} ${name?"mb-1":"my-1"}`}>
//       <p className="">{item.text}</p>
//     </div>
//   </div>
//   <div className={`flex flex-col ${activeUser.username === item.user?"order-1 mr-3":"ml-3"}`}>
//     <p className="scale-x-0 group-hover:scale-x-100 transition-all text-center">{milis()}</p>
//     <img src={require("./img/trash.png")} alt="" width="30" className={`m-auto scale-y-0 group-hover:scale-y-100 transition-all ${activeUser.username !== item.user&&"invisible"}`} onClick={() => remove(item.id, item.user)}/>
//   </div>
// </div>
