import Button from "../Button";
import ImageComponent from "./content/ImageComponent";
import TextContetn from "./content/TextContetn";
export default function MainContetn({ btnClass, color, textStyle }) {
  return (
    <div>
      <div className="flex justify-between mx-16 mb-31">
        <ImageComponent
          className={`ml-22.5`}
          src={`/images/other/mobile-phone.png`}
          alt={`phone`}
          width={539}
          height={539}
          priority={true}
        />
        <div className="flex flex-col items-end mt-53">
          <TextContetn
            style={`text-6xl ${textStyle.bigText} `}
            btnClass={btnClass}
            textStyle={textStyle}
            value={"تبدأ قصة تحولك من هنا"}
          />
          <TextContetn
            style={` text-xl mb-8 mt-6 text-[#192943] `}
            btnClass={btnClass}
            textStyle={textStyle}
            value={
              ".انضم إلى المئات من الأشخاص الذين غيّروا حياتهم ببرنامجنا المثبت فعاليته"
            }
          />
          <Button
            style={`${btnClass.btn} ${btnClass.blueBtn} ${btnClass.bigBtn} px-8 py-2`}
            value={"ابدأ رحلتك الآن"}
          />
        </div>
      </div>
    </div>
  );
}
