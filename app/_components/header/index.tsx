import Image from "next/image";
import { PiTextAlignJustify } from "react-icons/pi";

import styles from "./styles.module.css";
import SocialLinks from "../social-links";

function Header() {
  return (
    <div className={styles.header}>
      <Image src="/logo.webp" width={50} height={50} alt="header logo" />
      <div>
        <PiTextAlignJustify size={30} />
        {/* <SocialLinks /> */}
      </div>
    </div>
  );
}

export default Header;
