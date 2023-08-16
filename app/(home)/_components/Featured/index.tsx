import styles from "./styles.module.css";

import FeaturedDetails from "./FeaturedDetails";
import FeaturedLogo from "./FeaturedLogo";

function Featured() {
  return (
    <div className={styles.featured}>
      <div className="py-24 flex">
        <FeaturedLogo />
        <FeaturedDetails />
      </div>
    </div>
  );
}

export default Featured;
