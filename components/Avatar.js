export const Avatar = ({ size, url, editable, onChange }) => {
  let width = 'w-12';
  let heigth = 'h-12';
  if (size === 'lg') {
    width = 'w-24 md:w-32';
    heigth = 'h-24 md:h-32';
  }
  return (
    <div className={`${width} ${heigth} `}>
      <div className="rounded-full overflow-hidden">
        <img src={url} alt="" className="w-full" />
      </div>
    </div>
  );
};
