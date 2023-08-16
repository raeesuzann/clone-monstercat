"use client";

import YouTube, { YouTubeProps } from "react-youtube";

import styles from "./styles.module.css";

function MusicVideo() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="py-20">
      <h1 className={styles.music__title}>Music Video</h1>
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
    </div>
  );
}

export default MusicVideo;
