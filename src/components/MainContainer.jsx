import Underline from "./slider/Underline";
import MainContetn from "./slider/MainContent";

export default function MainContainer({ btnClass, color, textStyle }) {
  return (
    <>
      <MainContetn color={color} textStyle={textStyle} btnClass={btnClass} />
      <Underline color={color} textStyle={textStyle} />
    </>
  );
}
