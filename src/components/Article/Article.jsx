import React from "react";
import "./Article.css";

const Article = ({ title, children }) => {
  return (
    <>
      <h2 className="articleTitle">{title}</h2>
      <article>{children}</article>
    </>
  );
};

export default Article;
