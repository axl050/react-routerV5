import React, { useState, useEffect } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDIsable, setIsDIsable] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Faltan completar datos");
      setIsDIsable(true);
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDIsable(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Interprete"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          value={form.song}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
        <input
          type="button"
          onClick={handleSaveSong}
          value="Agregar cancion"
          disabled={isDIsable && "disabled"}
        />
      </form>
    </div>
  );
};

export default SongForm;
