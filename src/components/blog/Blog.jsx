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
              <p className="intro">{article.getIntro()}</p>
              <div className="details">
                <p className="author">{article.getAuthor()}</p>
                <p className="date">{article.getDate().toDateString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
