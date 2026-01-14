
import { NavigationMenuDemo,  } from "./select/vehicles";


function Header() {
  

  return (
    <div className="bg-black h-16 w-full px-4 flex items-center justify-around relative">
      <img src="/src/assets/logo.svg" alt="logo" className="h-8" />

      <ul className="hidden lg:flex gap-9 text-white text-sm font-light">
        
        
        
       <NavigationMenuDemo />
       </ul>

      <button className="text-white text-sm border-2 border-red-700 rounded h-8 px-4 hover:bg-red-700">
        REQ A 
      </button>

    </div>
  );
}

export default Header;
