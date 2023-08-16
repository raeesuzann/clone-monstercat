import Featured from "./_components/Featured";
import Players from "./_components/Players";
import Track from "./_components/Track";

export default function Home() {
  return (
    <div className="home">
      <Featured />
      <Players />
      <Track />
    </div>
  );
}
