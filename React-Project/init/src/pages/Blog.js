import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Blog`;
    async function getArticle() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();

      setArticle(response);
      setLoading(false);
  
  
    }
    getArticle();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog Page</h1>
      <p className="section-description">Berikut ini adalah tulisan koeh tapi nyomot</p>
      {loading && <i>Loading .....</i>}
      {!loading && (
        <div className="articles">
          {articles.map(function (article) {
            return (
                <article key={article.id} className="article">
                  <h2 className="article-title">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h2>
                  <time className="article-time">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </time>
                </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
