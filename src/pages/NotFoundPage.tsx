import React from "react";
import { Container } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Ошибка 404</h3>
      <hr className="text-light" />
      <Container
        className="py-2 d-block text-center"
        style={{ background: "#00183A" }}
      >
        <h3 className="text-light mb-4">Похоже что страница не найдена...</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="white"
          className="bi bi-emoji-frown-fill mb-3"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
        </svg>
        <h5 className="text-light">Вернуться на <span><a className="text-light" href="/">главную</a></span></h5>
      </Container>
    </Container>
  );
};

export default NotFoundPage;
