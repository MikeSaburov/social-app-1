export const Avatar = ({ size }) => {
  let width = 'w-12';
  let heigth = 'h-12';
  if (size === 'lg') {
    width = 'w-24 md:w-36';
    heigth = 'h-24 md:h-36';
  }
  return (
    <div className={`${width} ${heigth} rounded-full overflow-hidden`}>
      <img
        src="https://images.unsplash.com/photo-1610186594416-2c7c0131e35d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};
