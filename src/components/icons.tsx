const Icons = () => {
  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-30 md:gap-10 gap-6">
      <div className="space-y-6 flex flex-col items-center justify-center">
        <img className="w-23.75 h-16.25" src="\src\assets\img8.svg" alt="" />
        <span>143 @ 5000</span>
      </div>
      <div className="space-y-6 flex flex-col items-center justify-center">
        <img className="w-23.75 h-16.25" src="\src\assets\img9.png" alt="" />
        <span>1.5L and 2L</span>
      </div>
      <div className="space-y-6 flex flex-col items-center justify-center">
        <img className="w-23.75 h-16.25" src="\src\assets\img10.svg" alt="" />
        <span>05</span>
      </div>
    </div>
  );
};

export default Icons;
