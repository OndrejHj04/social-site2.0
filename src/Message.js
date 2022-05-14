export default function Message({ item, remove, activeUser }) {
  console.log(activeUser)
  return (
      <div className="flex flex-col m-1 w-fit group">
        <h1 className="text-gray-500 mx-2">{item.user}</h1>
        <div className="bg-red-500 rounded-3xl p-1 rounded-bl-none flex justify-between">
          <p className="text-xl my-auto ml-2">{item.text}</p>
          <img src={require("./img/trash.png")} width="30" alt="" className={`m-1 transition-all group-hover:scale-100 scale-0 ${activeUser.username!==item.user&&"invisible"}`} onClick={() => remove(item.id, item.user)} />
        </div>
      </div>
  );
}
