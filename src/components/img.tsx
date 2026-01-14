
import  { useState } from "react";
const imageBtn : Record<string, string> ={
    a:"/src/assets/img.jpg",
     b:  "/src/assets/img61.png",
     c:   "/src/assets/img62.png",
     d:   "/src/assets/img63.png",
     e:   "/src/assets/img64.png",
    
};

const Body = () => {
  const[active,setActive]=useState(imageBtn.a);
  return (
    <div className="w-full overflow-hidden relative bg-[url('/src/assets/chatgpt.png')] bg-center bg-cover">
      <img
        src={active}
        alt="Hero"
        className="
          w-full
         object-contain
        

          /* Desktop */
          h-[calc(100vh-64px)]

          /* Tablets */
          md:h-[85vh]

          /* Mobiles */
          sm:h-[75vh]

          /* Below 640px (580, 480, 375, 320) */
          max-sm:h-[30vh]
          "
        
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-5 ">
       {Object.keys(imageBtn).map((btn,i)=>(
        <button
        key={i}
        onClick={() => setActive(imageBtn[btn])}
         className="bg-black px-2 py-2 rounded-full hover:cursor-pointer   border border-transparent md:border-2 md:border-white lg:border-2 lg:border-white ">

            
         </button>
      ))}
      </div>
    </div>
  );
};

export default Body;