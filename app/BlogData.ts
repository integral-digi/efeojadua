import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your access token

    const fetchArticles = async () => {
      try {
        const userResponse = await fetch('https://api.medium.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const userData = await userResponse.json();
        const userId = userData.data.id;

        const publicationsResponse = await fetch(`https://api.medium.com/v1/users/${userId}/publications`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const publicationsData = await publicationsResponse.json();
        const publicationId = publicationsData.data[0].id; // Assuming you want articles from the first publication

        const postsResponse = await fetch(`https://api.medium.com/v1/users/${userId}/publications/${publicationId}/posts`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const postsData = await postsResponse.json();

        const recentArticles = postsData.data.slice(0, 4); // Get the first 4 articles
        setArticles(recentArticles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchArticles();
  }, []);

  // Render your articles here or process them in any way you need
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          {/* Display article information */}
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
