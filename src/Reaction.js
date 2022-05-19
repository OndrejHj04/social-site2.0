export default function Reaction({position, pickEmoji}) {

  return (
    <div className={`absolute bg-slate-500 rounded-xl -bottom-5 flex z-30 text-xl ${position?"right-1 ":"left-1"}`}>
      <p onClick={pickEmoji}>😀</p>
      <p onClick={pickEmoji}>🤣</p>
      <p onClick={pickEmoji}>😎</p>
      <p onClick={pickEmoji}>😢</p>
    </div>
  );
}
