import Image from "next/image";

import styles from "./styles.module.css";

function FeaturedArtist() {
  return (
    <div className={styles.artists}>
      <div className="rounded-full">
        <Image src="/artist1.webp" width={60} height={60} alt="artist" />
      </div>
      <div className="rounded-full px-5">
        <Image src="/artistdefault.webp" width={60} height={60} alt="artist" />
      </div>
    </div>
  );
}

export default FeaturedArtist;
