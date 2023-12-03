import Image from 'next/image';

const PortfolioPage = ({ portfolioItem }: any) => {
  const { id, name, tags, photo } = portfolioItem;

    return (
        <div className="portfolio-page">
            <h1>
                {name}
            </h1>
            <Image src={photo} alt={name} width={400} height={400} />
            <ul>
                {tags.map((tag))
                <li key={`${tag + id}`}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioPage;
