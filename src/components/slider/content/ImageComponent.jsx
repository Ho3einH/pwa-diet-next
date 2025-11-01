import Image from "next/image";

export default function ImageComponent({
  className,
  src,
  alt,
  width,
  height,
  priority,
}) {
  return (
    <div>
      <Image
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
}
