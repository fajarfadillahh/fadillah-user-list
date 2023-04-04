// import components
import UsersList from "@/components/Userspage/UsersList";

export default function users({ dataUsers }) {
  return (
    <>
      <UsersList dataUsers={dataUsers} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      dataUsers: data,
    },
  };
}
