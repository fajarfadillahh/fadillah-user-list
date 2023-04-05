import { RiMoonClearLine } from "react-icons/ri";

export default function Darkmode() {
  return (
    <div className="fixed bottom-12 right-12 inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-white text-[1.3rem] text-gray-900 shadow-lg transition hover:bg-pink-500 hover:text-white">
      <RiMoonClearLine />
    </div>
  );
}
