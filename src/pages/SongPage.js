import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

const SongPage = ({ mySongs }) => {
  let { id } = useParams();
  console.log(id, mySongs, mySongs[0]);
  let currentSong = mySongs[id];
  let { search, bio, lyric } = currentSong;

  return <SongDetails lyric={lyric} bio={bio} search={search} />;
};

export default SongPage;
