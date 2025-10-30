import Image from "next/image";
const header = () => {
  return (
    <>
      <div className="my-3 mx-10 flex justify-between items-center">
        <div>
          <button className="text-white bg-[#028BFF] rounded-lg text-sm px-3 py-2">
            ابدأ الآن
          </button>
          <button className="mx-11 text-sm">اتصل بنا</button>
          <button className="mx-4 text-sm">قصص النجاح</button>
        </div>
        <Image
          src="/icons/icon-72x72.png"
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
      </div>
      <hr className="text-[#E5E7EB]" />
    </>
  );
};

export default header;
