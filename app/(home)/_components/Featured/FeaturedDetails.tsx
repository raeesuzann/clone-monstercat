import { PiPlay, PiShareNetworkBold } from "react-icons/pi";

import Button from "@/app/_components/button";

import FeaturedArtist from "./FeaturedArtist";
import styles from "./styles.module.css";

function FeaturedDetails() {
  return (
    <div className="p-16">
      <div className={styles.title}>level days</div>
      <div className={styles.subtitle}>conro</div>
      <FeaturedArtist />
      <div className={styles.actions}>
        <Button type="primary">
          <PiPlay />
          <span>Listen Now</span>
        </Button>
        <Button>
          <PiShareNetworkBold />
          <span>share</span>
        </Button>
      </div>
    </div>
  );
}

export default FeaturedDetails;
