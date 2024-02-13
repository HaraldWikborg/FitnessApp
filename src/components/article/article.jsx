import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../../assets/data/articles";
import "./Article.css";

const Article = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const articleF = articles.find((article) => article.id === Number(id));
    setArticle(articleF);
  }, [id]);

  return (
    <div>
      {article ? (
        <div className="article">
          <h1>{article.title}</h1>
          <img src={article.image} alt={article.title} />
          <p>{article.content}</p>
        </div>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
};

export default Article;
