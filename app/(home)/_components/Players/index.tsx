import { PLAYERS } from "./players";
import styles from "./styles.module.css";

function Players() {
  return (
    <div className={styles.players}>
      <h1 className={styles.players__title}>Stream it your way</h1>

      <table className="border">
        <tbody>
          <tr>
            {PLAYERS.map((player) => (
              <td key={player.id}>
                <div className={styles.player__icon}>
                  {player.icon} {player.text}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Players;
