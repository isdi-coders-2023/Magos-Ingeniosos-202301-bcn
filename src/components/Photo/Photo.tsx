import PhotoStyled from "./PhotoStyled";

const Photo = (): JSX.Element => {
  return (
    <PhotoStyled className="photo">
      <img
        className="photo__img"
        src="./img/regular.jpg"
        alt="Melquiades the mage"
      />
      <div className="photo__description">
        <h2 className="photographer">Melquiades Heeringa</h2>
        <span className="tags">#black #witch #magic</span>
      </div>
    </PhotoStyled>
  );
};

export default Photo;
