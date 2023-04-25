import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "npm/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const epi = api.epi.getAll.useQuery();

  const data = epi.data;

  return (
    <div>
      <Head>
        <title>Medic AI</title>
        <meta name="description" content="Paramedic Pocket Book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="my-2">
          <h1>Medic AI</h1>
        </div>
        <div className="my-2">
          <h2>User Query goes here</h2>
        </div>
        <div className="my-2 rounded-md border border-r-black">
          <input />
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default Home;
