import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] bg-white shadow-md dark:bg-gray-900">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <img src="/images/icon.svg" alt="icon" />
          <h3 className="text-[20px] font-extrabold text-gray-900 dark:text-white">
            Fadillah.
          </h3>
        </Link>

        <ul className="inline-flex items-center gap-8">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["All Users", "/users"],
          ].map(([text, link]) => {
            return (
              <li key={text}>
                <Link
                  href={link}
                  className={`header-link font-semibold text-gray-900 hover:text-pink-500 dark:text-white dark:hover:text-pink-500 ${
                    router.pathname === link ||
                    (router.pathname.startsWith("/user") && link === "/users")
                      ? "active"
                      : null
                  }`}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
