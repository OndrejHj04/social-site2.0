export default function Reaction({position, pickEmoji, removeEmoji}) {

  return (
    <div className={`absolute bg-slate-200 rounded-xl -bottom-5 flex z-30 text-xl ${position?"right-1 ":"left-1"}`}>
      <p onClick={removeEmoji}>❌</p>
      <p onClick={pickEmoji}>😀</p>
      <p onClick={pickEmoji}>🤣</p>
      <p onClick={pickEmoji}>😎</p>
      <p onClick={pickEmoji}>😢</p>
    </div>
  );
}
