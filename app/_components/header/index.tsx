import Image from "next/image";
import { PiTextAlignJustify } from "react-icons/pi";

import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Image src="/logo.webp" width={50} height={50} alt="header logo" />
      <PiTextAlignJustify size={24} />
    </div>
  );
}

export default Header;
