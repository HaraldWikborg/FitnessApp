import "./Blog.css";
import articles from "../../assets/data/articles";

function Blog() {
  return (
    <>
      <div className="articlesContainer">
        {articles.map((article, index) => {
          return (
            <div key={index} className="article">
              <h2>{article.getTitle()}</h2>
              <img src={article.getImage()} alt={article.getTitle()} />
              <p>{article.getIntro()}</p>
              <p>{article.getAuthor()}</p>
              <p>{article.getDate().toDateString()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
