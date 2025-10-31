import Button from "./Button";

const MainContent = ({ btnClass }) => {
  return (
    <>
      <div className="flex flex-col items-end mr-16 mt-53">
        <h1 className="text-6xl font-bold text-[#192943]">
          تبدأ قصة تحولك من هنا
        </h1>
        <p className="text-xl mb-8 mt-6 text-[#192943]">
          .انضم إلى المئات من الأشخاص الذين غيّروا حياتهم ببرنامجنا المثبت
          فعاليته
        </p>
        <Button
          style={`${btnClass.btn} ${btnClass.blueBtn} ${btnClass.bigBtn} px-8 py-2`}
          value={"ابدأ رحلتك الآن"}
        />
      </div>
    </>
  );
};

export default MainContent;
