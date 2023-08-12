import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./index.css";


function AllNews() {
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    try {
      const response = await fetch("https://inshorts.me/news/all?offset=0&limit=21");
      const data = await response.json();
      setNewsData(data.data.articles);
      console.log(data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  useEffect(() => {
    fetchNewsData();
    const interval = setInterval(fetchNewsData, 500000); // Fetch news every 5 minutes (300000 milliseconds)
    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className="container mt-4">
      <h2 className="NewsHead">All News</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {newsData.map((newsItem) => (
          <div className="col" key={newsItem.hashId}>
            <Card className="h-100 card-hover-effect ">
              <Card.Img variant="top" src={newsItem.imageUrl} />
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                <Card.Text>{newsItem.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{newsItem.sourceName}</small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllNews;
