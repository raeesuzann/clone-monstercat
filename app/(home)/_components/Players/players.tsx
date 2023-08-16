import { ReactNode } from "react";
import {
  PiAppleLogo,
  PiBandaids,
  PiPlay,
  PiSoundcloudLogo,
  PiSpotifyLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

interface IPlayers {
  id: number;
  icon: ReactNode;
  text?: string;
}

export const PLAYERS: IPlayers[] = [
  {
    id: 1,
    icon: <PiPlay size={22} />,
    text: "player",
  },
  {
    id: 2,
    icon: <PiBandaids size={22} />,
  },
  {
    id: 3,
    icon: <PiSoundcloudLogo size={22} />,
  },
  {
    id: 4,
    icon: <PiAppleLogo size={22} />,
  },
  {
    id: 5,
    icon: <PiYoutubeLogo size={22} />,
  },
  {
    id: 6,
    icon: <PiSpotifyLogo size={22} />,
  },
];
