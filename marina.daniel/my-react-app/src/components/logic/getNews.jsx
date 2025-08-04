import React, { useState } from "react";
import "./getNews.scss";

const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "af0e766a1ccf475588965f28a4346fe4";

function getNews() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (searchQuery) => {
    setLoading(true);
    setError(null);
    setArticles(null);

    try {
      const res = await fetch(
        `${ENDPOINT}?apiKey=${API_KEY}&q=${encodeURIComponent(searchQuery)}`
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (data.articles.length === 0) {
        setArticles([]);
      } else {
        setArticles(data.articles);
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchNews(query.trim());
    }
  };

  const renderArticle = (article, index) => (
    <div key={index} className="article">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="article-image"
          style={{ maxWidth: "200px", maxHeight: "120px", objectFit: "cover" }}
        />
      )}
      <h3>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h3>
      <p>{article.description}</p>
      <p>
        <small>
          Source: {article.source.name} | Published:{" "}
          {new Date(article.publishedAt).toLocaleString()}
        </small>
      </p>
    </div>
  );

  return (
    <div>
      <h1>News App</h1>

      <button
        onClick={() => (window.location.href = "/")}
        style={{ marginTop: "1rem" }}
      >
        Go to Main Page
      </button>

      <form onSubmit={onSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          name="news"
          placeholder="Search news"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit">Search</button>
      </form>

      <div id="articlesWrapper">
        {loading && <p>Loading news...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && articles && articles.length === 0 && (
          <p>Nu am gasit rezultate</p>
        )}

        {!loading && articles && articles.length > 0 && (
          <div>
            {articles.map((article, index) => renderArticle(article, index))}
          </div>
        )}

        {!loading && articles === null && (
          <p>Enter a search term to see news</p>
        )}
      </div>

      
    </div>
  );
}

export default getNews;
