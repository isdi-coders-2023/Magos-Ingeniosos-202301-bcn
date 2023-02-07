import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = (): JSX.Element => {
  return (
    <>
      <div>
        <span>Filter by</span>
        <ul className="card_container">
          <li>
            <button>
              <i className="fa-brands fa-fort-awesome"></i>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-dragon"></i>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-hat-wizard"></i>
            </button>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <article></article>
        </li>
        <li>
          <article></article>
        </li>
        <li>
          <article></article>
        </li>
      </ul>
      <button>
        <i className="fa-solid fa-circle-arrow-left"></i>
      </button>
      <span>Page 1 of 10</span>
      <button>
        <i className="fa-solid fa-circle-arrow-right"></i>
      </button>
    </>
  );
};
console.log(HomePage);
export default HomePage;
