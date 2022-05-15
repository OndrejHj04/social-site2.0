export default function Message({ item, remove, activeUser }) {
  return (
    <div className={`flex content-betweenP flex-col m-1 group ${activeUser.username === item.user && "ml-auto"}`}>
      <div className={`flex text-gray-500 ${activeUser.username === item.user && "justify-end"}`}>
        <h1 className={` ${activeUser.username === item.user && "order-2"}`}>{item.user}</h1>
        <h1 className={` ${activeUser.username === item.user && "order-1"}`}>{item.time}</h1>
      </div>
      <div className={`flex ${activeUser.username === item.user && "ml-auto"}`}>
        <div className={`order-2 w-fit bg-red-500 rounded-3xl py-1 px-3 ${activeUser.username === item.user ? "rounded-br-none ml-auto" : "rounded-bl-none"}`}>
          <p className="text-xl my-auto ml-2">{item.text}</p>
        </div>
        <img src={require("./img/trash.png")} width="30" alt="" className={` order-1 m-1 transition-all group-hover:scale-100 scale-0 ${activeUser.username !== item.user && "hidden"}`} onClick={() => remove(item.id, item.user)} />
      </div>
    </div>
  );
}
