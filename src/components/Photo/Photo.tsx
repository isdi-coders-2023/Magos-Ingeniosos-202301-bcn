import PhotoStyled from "./PhotoStyled";

const Photo = (): JSX.Element => {
  return (
    <PhotoStyled>
      <article className="photo">
        <img
          className="photo_img"
          src="./img/regular.jpg"
          alt="Melquiades the mage"
        />
        <h2>Melquiades Heeringa</h2>
        <span>#black #witch #magic</span>
      </article>
    </PhotoStyled>
  );
};

export default Photo;
