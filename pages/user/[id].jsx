// import components
import Hero from "@/components/Detailpage/Hero";

export default function Detail({ dataUser }) {
  return (
    <>
      <Hero user={dataUser} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      dataUser: data,
    },
  };
}
