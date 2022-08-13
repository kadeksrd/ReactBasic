import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  let params = useParams();
  const [articles, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // get api
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`
      );

      // not found loginc
      if (!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();
      

      document.title = response.title; //ambil title 
      
      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, [params]);

  if (notFound) {
    return <h1>Halaman Tidak di temukan kawan :( </h1>;
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading .... </i>
      ) : (
        <div className="article-details">
          <h1 className="article-title">{articles.title}</h1>
          <time className="article-time">
            {new Date(articles.publishedAt).toLocaleDateString()}
          </time>{" "}
          <br />
          <img src={articles.imageUrl} alt={articles.title} className="article-image" />
          <p className="article-summary">{articles.summary}</p>
          <p className="article-source">
            Source:{"  "}
            <a href={articles.url} target="_blank" rel="noreferrer">
              {articles.newsSite}
            </a>
          </p>
        </div>
      )}
    </section>
  );
}
