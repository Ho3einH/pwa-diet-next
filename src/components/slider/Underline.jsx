export default function Underline({ color, textStyle }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`px-1 py-1 rounded-full bg-[#064576] `}></div>
      <hr className="text-[#E5E7EB] border-t-3 w-60.5" />
      <p className={`${textStyle.bigText} text-3xl mx-4.25`}>
        فريق الطبي دايت كلوب
      </p>
      <hr className="text-[#E5E7EB] border-t-3 w-60.5" />
      <div className={`px-1 py-1 rounded-full bg-[#064576] `}></div>
    </div>
  );
}
