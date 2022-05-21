export default function Reaction({pickEmoji, removeEmoji}) {

  return (
    <div className={` bg-slate-200 rounded-xl flex text-xl`}>
      <p onClick={removeEmoji}>❌</p>
      <p onClick={pickEmoji}>😀</p>
      <p onClick={pickEmoji}>🤣</p>
      <p onClick={pickEmoji}>😎</p>
      <p onClick={pickEmoji}>😢</p>
      <p onClick={pickEmoji}>💖</p>
    </div>
  );
}
