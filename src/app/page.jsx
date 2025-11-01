"use client";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { btnClass, color, textStyle } from "@/components/styles";

export default function Home() {
  return (
    <>
      <Header btnClass={btnClass} color={color} />
      <MainContainer btnClass={btnClass} color={color} textStyle={textStyle} />
    </>
  );
}
