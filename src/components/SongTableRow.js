import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, handleDeleteSong, id }) => {
  let { bio, search } = el;
  let avatar = bio.artists[0].strArtistThumb;
  let avatarStyles = {
    width: "auto",
    height: "40px",
  };
  // console.log(el);
  // console.log(id);
  // console.log(bio.artists[0].strArtistThumb);
  // console.log("id");

  let history = useHistory();
  return (
    <tr>
      <td colSpan={2}>
        <img style={avatarStyles} src={avatar} alt={search.artist} />
      </td>
      <td>{search.song}</td>
      <td>{search.artist} </td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
