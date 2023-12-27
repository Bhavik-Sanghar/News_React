import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap"; // Import Button from react-bootstrap

import Container from "react-bootstrap/Container";

function NewsApp() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "0a7dba7951b849b2b5494b80691e1e99";
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=Health&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data)
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  const limitedNewsData = newsData.slice(0, 15);

  return (
    <Container className="mt-4" >
      <h2 className="NewsHead">Health News</h2>
      <Row xs={1} md={3} className="g-4">
        {limitedNewsData.map((newsItem, index) => (
          <Col key={index}>
            <Card
              className="card-hover-effect"
              id="Card"
              style={{
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 4px )',
                WebkitBackdropFilter: 'blur( 4px )',
                borderRadius: '30px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
                height: '100%',
              }}
            >
              <Card.Img
                variant="top"
                src={newsItem.urlToImage}
                className="card-img"
                style={{
                  objectFit: 'cover',
                  height: '200px',
                }}
              />
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                <Card.Text>{newsItem.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button href={newsItem.url} target="_blank">
                  Read More
                </Button>
                <small className="text-muted">{newsItem.source.name}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsApp;
