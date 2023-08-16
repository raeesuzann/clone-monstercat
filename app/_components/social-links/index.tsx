import styles from "./styles.module.css";

import {
  PiDiscordLogo,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTiktokLogo,
  PiTwitchLogo,
  PiTwitterLogo,
} from "react-icons/pi";

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <PiInstagramLogo size={24} />
      <PiTiktokLogo size={24} />
      <PiTwitterLogo size={24} />
      <PiTwitchLogo size={24} />
      <PiFacebookLogo size={24} />
      <PiDiscordLogo size={24} />
    </div>
  );
}

export default SocialLinks;
