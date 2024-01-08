export default function Cover({ url, editable }) {
  return (
    <div className="h-36 overflow-hidden flex justify-center items-center ">
      <div>
        <img src={url} alt="" />
      </div>

      {editable && (
        <div>
          <button>Изменить обложку</button>
        </div>
      )}
    </div>
  );
}
