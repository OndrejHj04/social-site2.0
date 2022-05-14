export default function ScrollPage() {
  return (
    <div className="flex flex-col">
      <div className= "text-9xl overflow-y-scroll" style={{height: "calc(100vh - 140px)"}}>
        
      </div>
      <div className="flex m-2">
        <input type="text" className="text-2xl outline-none w-full border-2 border-black rounded-2xl p-2" />
        <img src={require("./img/send.png")} alt="" width="40" className="m-1"/>
      </div>
    </div>
  );
}
