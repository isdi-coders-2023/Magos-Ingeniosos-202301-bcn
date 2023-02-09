import "@fortawesome/fontawesome-free/css/all.min.css";
import LoadingStyled from "./LoadingStyled";

const Loading = () => {
  return (
    <LoadingStyled>
      <span className="loading__text">
        Casting...
        <i className="loading__icon fa-solid fa-wand-magic-sparkles"></i>
      </span>
    </LoadingStyled>
  );
};

export default Loading;
