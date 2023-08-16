import { PiPlay, PiShareNetwork } from "react-icons/pi";
import styles from "./styles.module.css";
import { ITracks, TRACKS } from "./tracks";

function TrackCard({ track: { id, name, album, time } }: { track: ITracks }) {
  return (
    <div className={styles.track__details}>
      <div className={styles.track__id}>{id}</div>
      <div className={styles.track__actions}>
        <PiPlay size={20} />
      </div>
      <div className={styles.track__name}>
        {name} <span className={styles.track__album}>{album}</span>
      </div>
      <div className={styles.track__time}>{time}</div>
      <div className={styles.tracK__share}>
        <PiShareNetwork size={22} />
      </div>
    </div>
  );
}

function Track() {
  return (
    <div className={styles.track}>
      <h1 className={styles.track__title}>Track List</h1>
      <div className={styles.track__list}>
        {TRACKS.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}

export default Track;
