import "@fortawesome/fontawesome-free/css/all.min.css";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled className="not-found">
      <span className="not-found__code">
        4<i className="fa-solid fa-skull"></i>4
      </span>
      <h1 className="not-found__title">Not found</h1>
      <span className="not-found__message">
        Our Wizards are out of mana right now, sorry.
      </span>
      <a role="button" className="not-found__button" href="/">
        Back to Home
      </a>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
