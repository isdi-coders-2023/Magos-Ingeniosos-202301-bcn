import Photo from "../Photo/Photo";

const PhotoList = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
      <li>
        <Photo />
      </li>
    </ul>
  );
};

export default PhotoList;
