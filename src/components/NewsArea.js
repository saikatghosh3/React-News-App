
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import '../style.css/NewsArea.css'

const NewsArea = ({category}) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=69450e69cda343a08565ab9cfd6f1cd0`;
        const response = await fetch(url);
        const data = await response.json();
        setArticle(data.articles); // Corrected to 'articles'
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className='text-center'>
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News</span>
      </h2>
      <div className="news-container news-grid">
        {article.map((news, index) => (
          <NewsItem
            key={index}
            author={news.author}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsArea;
