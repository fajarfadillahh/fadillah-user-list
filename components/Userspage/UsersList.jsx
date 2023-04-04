// import components
import Link from "next/link";
import UsersCard from "./UsersCard";

export default function UsersList({ dataUsers }) {
  return (
    <section className="pb-16 pt-32">
      <div className="container grid justify-center gap-8">
        <h1 className="section-title text-center text-[48px]">All Users</h1>

        <div className="grid justify-center gap-4">
          {dataUsers.map((user) => {
            return (
              <Link href={`/user/${user.id}`} key={user.id}>
                <UsersCard user={user} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
