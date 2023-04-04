import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="pb-16 pt-32">
      <div className="container flex items-center">
        <div className="mx-auto grid w-[768px] gap-8">
          <Link
            href="/users"
            className="inline-flex items-center gap-1 text-gray-900 hover:text-pink-500"
          >
            <RiArrowLeftLine className="text-[1.3rem]" />
            <p className="font-semibold">Back to list</p>
          </Link>

          <div>
            <h1 className="section-title pb-4 text-center text-[48px]">
              Details User
            </h1>

            <ul className="flex flex-col gap-2">
              {[
                ["Name:", "Name"],
                ["Username:", "Username"],
                ["Email:", "Email"],
                ["Phone:", "Phone"],
                ["Website:", "Website"],
              ].map(([text, value]) => {
                return (
                  <li
                    key={text}
                    className="inline-flex items-center gap-1 text-gray-900"
                  >
                    <p className="font-semibold">{text}</p>
                    <p className="font-extrabold">{value}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
