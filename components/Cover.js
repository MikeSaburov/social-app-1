export default function Cover({ url }) {
  return (
    <div className="h-36 overflow-hidden flex justify-center items-center ">
      <img src={url} alt="" />
    </div>
  );
}
