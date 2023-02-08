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
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1572978140070-1eed985bc8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHwyfHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Raul Muler"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1634409884980-a30da0b2b010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHwzfHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Inge Jeringa"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1618426257457-0bc6cfa2de33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHw0fHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Jhon McKlain"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1635075874856-dba5c46326da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHw1fHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Ash Ketchum"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1586796676977-d23a9217a24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHw2fHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Caneda Mishima"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1596762779387-9c681b5e2818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHw3fHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Rikki Six"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1572978029590-232f4826bd11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHw5fHx3aXphcmR8ZW58MHx8fHwxNjc1ODcyMDk0&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragon", "spell"]}
          photographer={"Christy Mack"}
        />
      </li>
      <li>
        <Photo
          url={
            "https://images.unsplash.com/photo-1641892596769-f7c8c1316e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDY2MDV8MHwxfHNlYXJjaHwxMXx8d2l6YXJkfGVufDB8fHx8MTY3NTg3MjA5NA&ixlib=rb-4.0.3&q=80&w=400"
          }
          tags={["magic", "dragondragondragon", "spell"]}
          photographer={"Little Caprice"}
        />
      </li>
    </PhotoListStyled>
  );
};

export default PhotoList;
