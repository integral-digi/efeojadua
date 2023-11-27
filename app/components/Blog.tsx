"use client"
import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const blogData = {
  title: 'Blog',
  subtitle: 'Insights & Ideas shared based on my experiences',
  photo: 'assets/post.jpg',
};

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const accessToken = process.env.NEXT_APP_MEDIUM_ACCESS_TOKEN; 
        if (!accessToken) throw new Error('Access token not found');

        const userResponse = await fetch('https://api.medium.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (!userResponse.ok) throw new Error('User data fetch failed');
        
        const userData = await userResponse.json();
        const userId = userData.data.id;

        const publicationsResponse = await fetch(`https://api.medium.com/v1/users/${userId}/publications`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (!publicationsResponse.ok) throw new Error('Publications data fetch failed');

        const publicationsData = await publicationsResponse.json();
        const publicationId = publicationsData.data[0].id;

        const postsResponse = await fetch(`https://api.medium.com/v1/users/${userId}/publications/${publicationId}/posts`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (!postsResponse.ok) throw new Error('Posts data fetch failed');

        const postsData = await postsResponse.json();
        const recentArticles = postsData.data.slice(0, 4); // Get the first 4 articles
        setArticles(recentArticles);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors (display message, retry mechanism, etc.)
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="w-full">
      <Heading title={blogData.title} subtitle={blogData.subtitle} />
      <section className="flex items-center space-x-6 overflow-x-scroll scrollbar-hide">
        {articles.map((article, index) => (
          <section key={index} className="space-y-11 w-72 h-96 bg-neutral-900 bg-opacity-40 rounded-lg shadow">
            <section className="w-full">
              <img src={article.image || blogData.photo} alt="blog photo" className="" /> {/* Use article image if available */}
            </section>
            <p className="w-64 text-white text-xl font-medium">{article.title}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Blog;
