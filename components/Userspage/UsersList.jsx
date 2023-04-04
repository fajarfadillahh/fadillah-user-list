// import components
import UsersCard from "./UsersCard";

export default function UsersList() {
  return (
    <section className="pb-16 pt-32">
      <div className="container grid justify-center gap-8">
        <h1 className="section-title text-center text-[48px]">All Users</h1>

        <div className="grid justify-center gap-4">
          <UsersCard />
          <UsersCard />
          <UsersCard />
        </div>
      </div>
    </section>
  );
}
