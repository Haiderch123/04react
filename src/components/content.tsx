const Content = () => {
  return (
    <section className="overflow-hidden  ">
     

      <div className="grid grid-cols-1 lg:grid-cols-3 md:py-20 p-6 items-center container mx-auto justify-center">
        {/* button detail */}
        <div className="flex flex-col items-center justify-center md:gap-10 font-[Roboto] ">
          <button>Hector Shine</button>
          <button>Hector Savy</button>
          <button>
            Hector Shine
          </button>
          <button>Hector Shine Pro</button>
          <button>Hector Shine </button>
        </div>
        {/* image detail */}
        <div className="flex items-center justify-center">
          <img className="h-112.5" src="\src\assets\img11.svg" alt="" />
        </div>
        {/* dimension detail */}
        <div className="lg:space-y-20 space-y-8 ">
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col gap-3  font-8 font-bold font-[Roboto] ">
            <h1 className="font-medium font-8 ">Dimensions</h1>
            <p className="w-20 bg-red-500 h-1"></p>
            <p className="my-4">Length x Width x Height(mm)</p>
            <p className="">Wheel Base (mm)</p>
            <p className="my-4">Wheel and tyre</p>
          </div>
          <div className="flex flex-col gap-9 font-medium font-8  font-[Roboto]  ">
            <h1 className="font-medium font-8">Powertrain</h1>

            <p>4,699 x 1,835 x 1,760</p>
            <p>2,750</p>
            <p>215/60 R17: 436.6 mm (17”)</p>
          </div>
           
        </div >
        <button className="h-12.5 w-54.25  rounded-[13px] bg-red-700 text-white hover:border-2 border-blue-500 mt-6">
          Download Brochure
        </button>
        </div>
      </div>
      <h1 className=" font-black text-3xl font-[Roboto] ml-7 ]">
        SIDE STEP BOARD
      </h1>
    </section>
  );
};

export default Content;
