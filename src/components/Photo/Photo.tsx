import PhotoStyled from "./PhotoStyled";

const Photo = (): JSX.Element => {
  return (
    <PhotoStyled className="photo">
      <img
        className="photo_img"
        src="./img/regular.jpg"
        alt="Melquiades the mage"
      />
      <h2 className="photograf">Melquiades Heeringa</h2>
      <span className="tags">#black #witch #magic</span>
    </PhotoStyled>
  );
};

export default Photo;
