const SongLyrics = ({ artist, lyric }) => {
  return (
    <section>
      <h3>{artist}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyric}</blockquote>
    </section>
  );
};

export default SongLyrics;
