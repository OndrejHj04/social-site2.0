export default function Reaction({position}) {

  return (
    <div className={`absolute bg-slate-500 rounded-xl -bottom-5 flex z-30 text-lg ${position?"right-1 ":"left-1"}`}>
      <p>😀</p>
      <p>🤣</p>
      <p>😎</p>
      <p>😢</p>
    </div>
  );
}
