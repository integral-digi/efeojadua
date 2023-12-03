import { entries } from "@/app/Components/PortfolioData";
import PortfolioPage from "../Components/PortfolioItem";

const singleEntry = entries.map((entry)=>(entry));

export const generateStaticParams = async() => {
    const entries = await fetch('.../Components/PortfolioData').then((res) => res.json())
   
    return entries.map((entry) => ({
      name: entry.name,
    }))
  }

const PortHome = ({ entry }: { entry: { name: string } }) => {
  const { name } = entry
  
  return (
    <PortfolioPage portfolioItem={name} />
  )  
}

export default PortHome;

