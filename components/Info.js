import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col justify-center mt-8 gap-8">
        <Image
          src="/asset/thumbnail.webp"
          className="border-8 border-yellow-400"
          width={500}
          height={300}
          alt="Thumbnail"
        />
        <span className="text-center text-2xl font-poppins font-semibold text-white">The Most Attractive Thumbnail</span>
    </div>
  );
};

export default Info;
