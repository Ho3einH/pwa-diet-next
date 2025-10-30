import Image from "next/image";

const Button = () => {
  return (
    <>
      <div>
        <button className=" cursor-pointer text-white bg-[#028BFF] rounded-lg text-sm font-medium px-3 py-2">
          ابدأ الآن
        </button>
        <button className=" cursor-pointer mx-11 text-sm font-medium text-[#192943]">
          اتصل بنا
        </button>
        <button className=" cursor-pointer mx-4 text-sm font-medium text-[#192943]">
          قصص النجاح
        </button>
      </div>
      <button className="cursor-pointer">
        <Image
          src="/icons/icon-72x72.png"
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
      </button>
    </>
  );
};

export default Button;
