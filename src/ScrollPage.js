export default function ScrollPage() {
  return (
    <div className="flex flex-col h-full">
        <div className="bg-white overflow-y-scroll h-full">

        </div>
        <div className="flex m-2">
            <input type="text" className="w-full border-2 border-black"/>
            <img src={require("./img/send.png")} alt="" width="40" className="ml-2"/>
        </div>
    </div>
  );
}
