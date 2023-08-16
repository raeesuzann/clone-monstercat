import styles from "./styles.module.css";

import {
  PiDiscordLogo,
  PiFacebookLogo,
  PiInstagramLogo,
  PiPlayCircle,
  PiTiktokLogo,
  PiTwitchLogo,
  PiTwitterLogo,
} from "react-icons/pi";

interface ISocialLinks {
  horizontal?: boolean;
}

function SocialLinks({ horizontal }: ISocialLinks) {
  return (
    <div className={`${styles.socialLinks}  ${horizontal && "flex items-center justify-between flex-1"}`}>
      <PiInstagramLogo size={22} />
      <PiTiktokLogo size={22} />
      <PiTwitterLogo size={22} />
      <PiTwitchLogo size={22} />
      <PiFacebookLogo size={22} />
      <PiDiscordLogo size={22} />
      <PiPlayCircle size={22} />
    </div>
  );
}

export default SocialLinks;
