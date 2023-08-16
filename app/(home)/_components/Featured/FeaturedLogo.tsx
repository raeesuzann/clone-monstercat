import Image from "next/image";

import styles from "./styles.module.css";

function FeaturedLogo() {
  return (
    <div className={styles.featuredLogo}>
      <div className={styles.featuredImageDesc}>
        <span>Instinct</span> — Released May 22, 2020
      </div>
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
