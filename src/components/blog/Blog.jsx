import "./Blog.css";
import articles from "../../assets/data/articles";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  const [currentArticles, setCurrentArticles] = useState([]);
  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    setCurrentArticles(articles.slice(0, 2));
  };

  const loadMore = () => {
    let current = currentArticles.length;
    setCurrentArticles(articles.slice(0, current + 2));
  };

  return (
    <>
      <div className="articlesContainer">
        {currentArticles.map((article, index) => {
          return (
            <NavLink
              key={index}
              className="article"
              to={`/article/${article.getId()}`}
            >
              <h2>{article.getTitle()}</h2>
              <img src={article.getImage()} alt={article.getTitle()} />
              <p className="intro">{article.getIntro()}...</p>
              <div className="details">
                <p className="author">{article.getAuthor()}</p>
                <p className="date">{article.getDate().toDateString()}</p>
              </div>
            </NavLink>
          );
        })}
        {
          <div className="showMore" onClick={loadMore}>
            Show More
          </div>
        }
      </div>
    </>
  );
}

export default Blog;
