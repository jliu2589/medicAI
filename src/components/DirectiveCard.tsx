import { NextComponentType } from "next";
import React from "react";

type DirectiveProps = {
  directive: string;
  treatment: string;
  dose: string;
  route: string;
};
const DirectiveCard: React.FC<DirectiveProps> = ({
  directive,
  treatment,
  dose,
  route,
}) => {
  return (
    <article
      className=" relative mt-8 flex h-max w-[80%] flex-col items-center rounded-2xl border-2
    border-solid border-gray-950 bg-stone-50 p-8 md:order-1 md:col-span-8 xl:col-span-4"
    >
      <div className="absolute -right-3 top-0 -z-10 h-[107%] w-[102%] rounded-[2rem] bg-gray-950" />

      <p className="font-bold">{directive}</p>
      <p>Treatment: {treatment}</p>
      <p>Route: {route}</p>
      <p className="text-blue-500">Dose: {dose}</p>
    </article>
  );
};

export default DirectiveCard;
