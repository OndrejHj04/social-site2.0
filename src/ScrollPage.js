export default function ScrollPage() {
  return (
    <div className="flex flex-col bg-red-300 h-full">
        <div className="flex-1">

        </div>
        <div className="flex m-2">
            <input type="text" className="w-full"/>
            <img src={require("./img/send.png")} alt="" width="40" className="ml-2"/>
        </div>
    </div>
  );
}
