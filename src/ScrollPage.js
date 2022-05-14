export default function ScrollPage({height}) {
  return (
    <div className="flex flex-1 flex-col">
      <div className= "text-9xl overflow-y-scroll" style={{height: `calc(${height}px - 140px)`}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste voluptate aspernatur exercitationem nobis accusamus dolores placeat repellat cupiditate labore laborum facere, similique doloribus! Consectetur quo praesentium totam itaque earum.
      </div>
      <div className="flex m-2">
        <input type="text" className="text-2xl outline-none w-full border-2 border-black rounded-2xl p-2" />
        <img src={require("./img/send.png")} alt="" width="40" className="m-1"/>
      </div>
    </div>
  );
}
