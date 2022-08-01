import useSWR from "swr";
import axios from "axios";
async function fetcherFunc(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Home({ data }) {
  // const url = "http://localhost:3000/api/hello";
  // const { name, error } = useSWR(url, fetcherFunc, {
  // initialData: props,
  // revalidateOnMount: true,
  // });

  // const { name } = data;
  if (!data) return <div>fetching</div>;

  // return <div>name</div>;
  return <div>name: {JSON.stringify(data)}</div>;
}

export async function getStaticProps(context) {
  const res = await axios.get("http://192.168.1.22:8787/v5/home");
  const { data } = await res;
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
