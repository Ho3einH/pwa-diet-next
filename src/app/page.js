"use client";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const btnClass = {
  btn: "cursor-pointer font-medium text-sm",
  blueBtn: "text-white rounded-2xl bg-[#028BFF]",
  bigBtn: "text-xl",
};
const color = {
  blueBtn: "#028BFF",
  text: "#192943",
};

export default function Home() {
  return (
    <>
      <Header btnClass={btnClass} color={color} />
      <MainContent btnClass={btnClass} />
    </>
  );
}
