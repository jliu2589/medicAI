import { type NextPage } from "next";
import Head from "next/head";
import DirectiveCard from "npm/components/DirectiveCard";
import phone from "../../public/phone-icon.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { OpenAI } from "langchain/llms/openai";
import { api } from "npm/utils/api";
import { PromptTemplate } from "langchain/prompts";
import PhoneModal from "npm/components/PhoneModal";

// const model = new OpenAI({ temperature: 0.9 });
// const template = "What is a good name for a company that makes {product}?";
// const prompt = new PromptTemplate({
//   template: template,
//   inputVariables: ["product"],
// });
// const res = await prompt.format({ product: "colorful socks" });
// console.log(res);

const Home: NextPage = () => {
  const [input, setInput] = useState("");

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
      <main className="relative flex min-h-screen flex-col items-center">
        <div className="absolute right-4 top-3">
          <PhoneModal />
        </div>
        <div className="my-4 mt-10 justify-self-start">
          <h1 className="text-5xl text-slate-500">Medic AI</h1>
        </div>
        <div className="my-2">
          <h2 className="text-xl">User Query goes here</h2>
        </div>
        <div className="my-2 w-3/4 rounded-md border">
          <input
            placeholder="Chief Complaint, Drugs, Skills, Destination Guidelines ..."
            className="h-8 w-full"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <DirectiveCard
          directive="Hypoglycemia"
          treatment="D50W"
          dose="20mL"
          route="IV"
        />
        <DirectiveCard
          directive="Hypoglycemia"
          treatment="Glucagon"
          dose="1mg"
          route=" IM"
        />
      </main>
    </div>
  );
};

export default Home;
