import Image from 'next/image';

const PortfolioPage = ({ portfolioItem }: any) => {
  const { id, name, tags, photo } = portfolioItem;

    return (
        <section className="portfolio-page w-full">
            <h1 className=''>Portfolio Single</h1>
        </section>
    );
};

export default PortfolioPage;
