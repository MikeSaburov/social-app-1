export const Avatar = ({ size, url }) => {
  let width = 'w-12';
  let heigth = 'h-12';
  if (size === 'lg') {
    width = 'w-24 md:w-32';
    heigth = 'h-24 md:h-32';
  }
  return (
    <div className={`${width} ${heigth} rounded-full overflow-hidden`}>
      <img src={url} alt="" className="w-full" />
    </div>
  );
};
