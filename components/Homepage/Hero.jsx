import Link from "next/link";

export default function Hero() {
  return (
    <section className="pb-16 pt-32">
      <div className="container grid justify-items-center gap-12">
        <div className="max-w-3xl text-center">
          <h1 className="section-title pb-4 text-[48px]">Home Page</h1>
          <div className="grid gap-4">
            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              commodi error voluptatem ullam cumque incidunt, optio voluptas
              dicta sint repellat, porro fugit, earum tempora esse dolorum
              quisquam. Officiis, accusamus molestias. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat ea nemo omnis tempora
              architecto delectus.
            </p>
            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              commodi error voluptatem ullam cumque incidunt, optio voluptas
              dicta sint repellat, porro fugit, earum tempora esse dolorum
              quisquam. Officiis, accusamus molestias.
            </p>
          </div>
        </div>

        <Link href="/users" className="btn inline-flex">
          See all users
        </Link>
      </div>
    </section>
  );
}
