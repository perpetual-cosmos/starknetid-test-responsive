import { AlignJustify } from "@deemlol/next-icons";
import { Clock } from "@deemlol/next-icons";
const Header = () => {
  return (
    <div className="flex justify-between py-6">
        <div className="ml-[4vw] flex items-center bg-white p-2 "><Clock size={18} color="#000000" className="border-0 mr-1"/><button className="mr-2">Starknet Id</button></div>
        <div className="mr-[4vw] flex gap-x-4">
            <button>My identity</button>
            <button>Domains</button>
            <button><AlignJustify size={24} color="#000000" /></button>
            <div className="flex items-center bg-white p-2 rounded"><button className="mr-2">kevin.stark</button><Clock size={18} color="#000000" className="border-0"/></div>
        </div>
    </div>
  )
};

export default Header;
