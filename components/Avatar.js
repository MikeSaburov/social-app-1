export const Avatar = ({ size, url }) => {
  let width = 'w-12';
  let heigth = 'h-12';
  if (size === 'lg') {
    width = 'w-24 md:w-36';
    heigth = 'h-24 md:h-36';
  }
  return (
    <div className={`${width} ${heigth} rounded-full overflow-hidden`}>
      <img src={url} alt="" />
    </div>
  );
};
