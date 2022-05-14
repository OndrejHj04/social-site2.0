import { useState } from "react";

export default function ScrollPage() {
  const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener("resize", ()=>setHeight(window.innerHeight))

  return (
    <div className="flex flex-col flex-1 justify-between">
      <div className="bg-white overflow-y-scroll text-9xl h-full" style={{ height: `calc(${height}px - 129px)` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, esse velit vitae ipsa deserunt praesentium blanditiis molestiae repudiandae voluptates et consequuntur soluta est reprehenderit ipsam eum molestias tempora repellendus quas.
      </div>
      <div className="flex m-2">
        <input type="text" className="w-full border-2 border-black" />
        <img src={require("./img/send.png")} alt="" width="40" className="ml-2" />
      </div>
    </div>
  );
}
