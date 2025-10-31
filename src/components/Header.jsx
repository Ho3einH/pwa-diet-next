import Image from "next/image";
import Button from "./Button";

const Header = ({ btnClass, color }) => {
  return (
    <>
      <div className="my-3 mx-10 flex justify-between items-center">
        <div>
          <Button
            style={`${btnClass.btn} ${btnClass.blueBtn} rounded-lg px-3 py-2`}
            value={"ابدأ الآن"}
          />
          <Button
            style={`${btnClass.btn} mx-11 text-[${color.text}]`}
            value={"اتصل بنا"}
          />
          <Button
            style={`${btnClass.btn} mx-4 text-[${color.text}]`}
            value={"قصص النجاح"}
          />
        </div>
        <a className="cursor-pointer">
          <Image
            src="/icons/icon-72x72.png"
            alt="logo"
            width={50}
            height={50}
            priority={true}
          />
        </a>
      </div>
      <hr className="text-[#E5E7EB]" />
    </>
  );
};

export default Header;
