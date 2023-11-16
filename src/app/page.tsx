"use client";

import { CardShoes } from "@/components/CardShoes/CardShoes";
import { Header } from "@/components/Header/Header";
import shoesData from "@/data/shoes.json";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Image src="/title.png" alt="title hero" width={1316} height={265} draggable={false} className="my-12"/>
    </>
  );
}
