import React from 'react';
import { entries } from '@/app/Components/PortfolioData';
import PortfolioPage from '../Components/PortfolioItem';

const Portfolio: React.FC = () => {
  const portfolioItem = entries.find((item) => item.id === parseInt(params.portfolioId));

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return <PortfolioPage portfolioItem={portfolioItem} />;
};

export async function generateStaticParams() {
  return {
    params: entries.map((item) => ({
      portfolioId: item.id.toString(),
    })),
  };
}

export async function getStaticProps({ params }: any) {
  const portfolioId = parseInt(params.portfolioId);
  const portfolioItem = entries.find((item) => item.id === portfolioId);

  return { props: { portfolioItem } };
}

export default Portfolio;