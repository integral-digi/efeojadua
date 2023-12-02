interface ScrollButtonProps {
  scrollAmount: number;
  classSelector: string;
  operator: '+' | '-';
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollAmount, classSelector, operator }) => {
  const scrollContainer = () => {
    const container = document.querySelector(classSelector);

    if (container instanceof HTMLElement) {
      container.scrollTo({
        left: operator === '+' ? container.scrollLeft + scrollAmount : container.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      className={`absolute bottom-72 bg-white p-2 rounded-full shadow-md z-50 ${operator !== '+' ? '-left-4' : '-right-4'}`}
      onClick={scrollContainer}
    >
      {
        operator === '+' 
        ? <img src="/assets/chevron-right.svg" alt="right-scroll" className="w-4 h-4" /> 
        : <img src="/assets/chevron-left.svg" alt="left-scroll" className="w-4 h-4" />
      }
    </button>
  );
};

export default ScrollButton;
