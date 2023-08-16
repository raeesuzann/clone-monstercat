import styles from "./styles.module.css";

import SocialLinks from "@/app/_components/social-links";

import FeaturedLogo from "./FeaturedLogo";
import FeaturedDetails from "./FeaturedDetails";

function Featured() {
  return (
    <div className={styles.featured}>
      <div className="p-24 flex">
        <FeaturedLogo />
        <FeaturedDetails />
      </div>
      <SocialLinks />
    </div>
  );
}

export default Featured;
