import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json())

export default function Web() {
  const { data } = useSWR('/api/user', fetcher)

  console.log('data', data)

  return (
    <div>
      <h1>Web</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
