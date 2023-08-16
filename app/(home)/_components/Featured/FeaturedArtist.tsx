import Image from "next/image";

import styles from "./styles.module.css";

function FeaturedArtist() {
  return (
    <div className={styles.artists}>
      <div className="rounded-full">
        <Image src="/artist1.webp" width={70} height={70} alt="artist" />
      </div>
      <div className="rounded-full px-5 w-70 h-70">
        <Image src="/artistdefault.webp" width={70} height={70} alt="artist" />
      </div>
    </div>
  );
}

export default FeaturedArtist;
