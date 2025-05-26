import ProfileContenet from "../components/profileContent";
export default function Home() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[80vh]">
        <img
          src="/tree.png"
          alt="tree-left"
          className="absolute bottom-[-100] left-[-250] h-full max-h-[600px] object-contain pointer-events-none select-none -z-10"
        />
        <ProfileContenet />
        <img
          src="/tree.png"
          alt="tree-right"
          className="absolute bottom-[-100] right-[-250] h-full max-h-[600px] object-contain pointer-events-none select-none -z-10"
        />
      </div>
    </>
  );
}
