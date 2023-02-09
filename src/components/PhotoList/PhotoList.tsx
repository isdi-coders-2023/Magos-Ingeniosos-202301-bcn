import Photo from "../Photo/Photo";
import PhotoListStyled from "./PhotoListStyled";

const PhotoList = (): JSX.Element => {
  return (
    <PhotoListStyled className="photo__list list">
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHwxfHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Roman Chumchek"}
        />
      </li>
    </PhotoListStyled>
  );
};

export default PhotoList;
