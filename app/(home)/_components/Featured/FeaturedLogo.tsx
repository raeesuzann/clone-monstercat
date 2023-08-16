import Image from "next/image";

function FeaturedLogo() {
  return (
    <div>
      <Image
        src="/featuredImage.png"
        width={480}
        height={400}
        alt="featuredImage"
      />
    </div>
  );
}

export default FeaturedLogo;
