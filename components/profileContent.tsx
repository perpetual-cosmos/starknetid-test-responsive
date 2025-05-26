import { Clock } from "@deemlol/next-icons";
const ProfileContenet = () => {
  return (
    <div className="bg-[#FFFCF8] h-[50vh] w-[50vw] rounded-2xl shadow-xl">
      <div className="flex flex-col items-center">
        <div className="flex justify-center my-8 mx-4">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-black">
            <img src="./strid.jpg" alt="profile image" />
          </div>
        </div>
        <h1 className="text-xl font-bold">KEVILS.STARK</h1>
        <p>0x4fdf...i8f8</p>
        <div className="flex mt-8">
        <div className="ml-[4vw] flex items-center bg-white p-2 shadow-sm rounded"><Clock size={18} color="#000000" className="border-0 mr-1"/><button className="mr-2">Starknet Id</button></div>
        <div className="ml-[4vw] flex items-center bg-white p-2 shadow-sm roudned"><Clock size={18} color="#000000" className="border-0 mr-1"/><button className="mr-2">Starknet Id</button></div>
        <div className="ml-[4vw] flex items-center bg-white p-2 shadow-sm rounded"><Clock size={18} color="#000000" className="border-0 mr-1"/><button className="mr-2">Starknet Id</button></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContenet;
