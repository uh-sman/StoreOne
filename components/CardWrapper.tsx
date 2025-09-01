import React from "react";
import CardComponent from "./CardComponent";
import { CardComponentProps } from "@/constants";

interface CardWrapperProps {
  title: string;
  items: CardComponentProps[];
}
const CardWrapper = ({ title, items }: CardWrapperProps) => {
  return (
    <section className="section grid place-items-center mx-2 lg:mx-4">
      <article>
        <h1 className="font-bold text-4xl mb-[27.5px]">{title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[34px] max-w-[1188px]">
          {items.map((item, index) => (
            <CardComponent key={index} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default CardWrapper;
