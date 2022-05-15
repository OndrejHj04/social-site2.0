export default function Message({ item, remove, activeUser }) {
  const milis = () => {
    const date = new Date(Number(item.time));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().length < 2?"0"+date.getMinutes():date.getMinutes();

    return `${day}. ${month}. ${hours}:${minutes}`;
  };
  return (
    <div className={`w-full flex group ${activeUser.username === item.user&&"justify-end"}`}>
      <div className={`flex flex-col ${activeUser.username === item.user&&"order-2"}`}>
        <div className="flex justify-between">
          <h1 >{item.user}</h1>
        </div>
        <div className={`bg-red-400 p-2 text-lg w-fit  rounded-2xl ${activeUser.username === item.user?"ml-auto rounded-br-none": "rounded-bl-none"}`}>
          <p>{item.text}</p>
        </div>
      </div>
      <div className={`flex flex-col ${activeUser.username === item.user?"order-1 mr-3":"ml-3"}`}>
        <p className="scale-x-0 group-hover:scale-x-100 transition-all">{milis()}</p>
        <img src={require("./img/trash.png")} alt="" width="30" className={`m-auto scale-y-0 group-hover:scale-y-100 transition-all ${activeUser.username !== item.user&&"invisible"}`} onClick={() => remove(item.id, item.user)}/>
      </div>
    </div>
  );
}

