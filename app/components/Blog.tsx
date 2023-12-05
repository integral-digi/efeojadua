"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Link from 'next/link';

type Article = {
  title: string;
  coverImage: string;
  link: string;
};

const blogData: {
  title: string;
  subtitle: string;
  photo: string;
} = {
  title: 'Blog',
  subtitle: 'Insights & Ideas shared based on my experiences',
  photo: 'assets/post.jpg',
};

const fetchArticles = async (accessToken: string): Promise<Article[]> => {
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
  return postsData.data.slice(0, 4) as Article[]; // Get the first 4 articles
};

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticlesWithAccessToken = async () => {
      const accessToken = process.env.NEXT_APP_MEDIUM_ACCESS_TOKEN;

      if (!accessToken) {
        console.error('Access token not found');
        setArticles([]);
        return;
      }

      try {
        const fetchedArticles = await fetchArticles(accessToken);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching data:', error);
        setArticles([]);
      }
    };

    fetchArticlesWithAccessToken();
  }, []);

  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 3 }}
      exit={{ opacity: 0 }}
    >
      <Heading title={blogData.title} subtitle={blogData.subtitle} />

      {articles.length ? (
        <section className="flex items-center space-x-6 overflow-x-scroll scrollbar-hide">
          {articles.map((article, index) => (
            <Link href={article.link} key={index} passHref>
              <section
                key={index}
                className="space-y-11 w-72 h-96 bg-neutral-900 bg-opacity-40 rounded-lg shadow"
              >
                <section className="w-full">
                  <img
                    src={article.coverImage || blogData.photo}
                    alt="blog photo"
                    className="h-56 w-full"
                  />
                </section>
                <p className="w-64 text-white text-xl font-medium">
                  {article.title}
                </p>
              </section>
            </Link>
          ))}
        </section>
      ) : (
        <p className="text-white text-base text-left pt-8">
          Insights on the way.
        </p>
      )}
    </motion.section>
  );
};

export default Blog;
