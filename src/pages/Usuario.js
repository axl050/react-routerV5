import { useParams } from "react-router-dom";

const Usuario = () => {
  let { userName } = useParams();
  console.log(userName);

  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre del usuario <b>{userName}</b>
      </p>
    </div>
  );
};

export default Usuario;
