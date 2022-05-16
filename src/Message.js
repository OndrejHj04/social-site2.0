export default function Message({ item, remove, activeUser, name }) {
  const milis = () => {
    const date = new Date(Number(item.time));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().length < 2?"0"+date.getMinutes():date.getMinutes();

    return `${day}. ${month}. ${hours}:${minutes}`;
  };
  
  return (
    <div className={` flex group ${activeUser.username === item.user&&"justify-end"}`} id={item.time}>
      <div className={`flex flex-col ${activeUser.username === item.user&&"order-2"}`}>
        {name&&<div className={`flex justify-between ${activeUser.username === item.user&&"ml-auto"}`} >
          <h1 >{activeUser.username === name?"You":name}</h1>
        </div>}
        <div className={`bg-blue text-white p-2 text-lg w-fit rounded-2xl ${activeUser.username === item.user?"ml-auto rounded-br-none": "rounded-bl-none"} ${name?"mb-1":"my-1"}`}>
          <p className="">{item.text}</p>
        </div>
      </div>
      <div className={`flex flex-col ${activeUser.username === item.user?"order-1 mr-3":"ml-3"}`}>
        <p className="scale-x-0 group-hover:scale-x-100 transition-all text-center">{milis()}</p>
        <img src={require("./img/trash.png")} alt="" width="30" className={`m-auto scale-y-0 group-hover:scale-y-100 transition-all ${activeUser.username !== item.user&&"invisible"}`} onClick={() => remove(item.id, item.user)}/>
      </div>
    </div>
  );
}

