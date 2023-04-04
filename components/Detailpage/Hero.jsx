import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";

export default function Hero({ user }) {
  return (
    <section className="pb-16 pt-32">
      <div className="container flex items-center">
        <div className="mx-auto grid w-[768px] gap-8">
          <Link
            href="/users"
            className="inline-flex w-max items-center gap-1 text-gray-900 hover:text-pink-500"
          >
            <RiArrowLeftLine className="text-[1.3rem]" />
            <p className="font-semibold">Back to list</p>
          </Link>

          <div className="grid gap-6">
            <div className="text-center">
              <h1 className="section-title text-[48px]">
                Details User {user.id}
              </h1>
              <p className="text-[18px] font-bold text-gray-900">
                Hi, {user.name} 👋
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {[
                ["😎 Name:", `${user.name}`],
                ["✌ Username:", `${user.username}`],
                ["📧 Email:", `${user.email}`],
                ["📞 Phone:", `${user.email}`],
                ["🌏 Website:", `${user.website}`],
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
