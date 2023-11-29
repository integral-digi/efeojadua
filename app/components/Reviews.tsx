"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

type ReviewProps = {
  id: number;
  reviewer: string;
  reviewerIcon: string;
  company: string;
  comment: string;
};

const reviewData: ReviewProps[] = [
  {
    id: 1,
    reviewer: "Jordan",
    reviewerIcon: "assets/userTwo.png",
    company: "Test Ace",
    comment: "Outstanding designs and diligent work. It's a pleasure to work with Efe, really looking forward to our continued work"
  },
  {
    id: 2,
    reviewer: "Levi",
    reviewerIcon: "assets/userOne.png",
    company: "MasteryEcom",
    comment: "A star talent. I and my CDO are truly grateful for finding Efe. Incredible experience throughout, even with a few difficulties on our end. The skill level and attention to detail are next to none, and we thoroughly look forward to working with Efe_trust again!"
  },
  {
    id: 3,
    reviewer: "Elo",
    reviewerIcon: "assets/userThree.png",
    company: "Travvelbaby",
    comment: "Efe was an asset in the designing and development of our MVP, I look forward to our future collaborations."
  },
];

const Reviews = () => {
  const [inView, setInView] = useState(2);

  const handleClick = (reviewId: number) => {
    setInView(reviewId);
  };

  return (
    <motion.section 
      className="flex items-center space-x-6 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 3 }}
      exit={{ opacity: 0 }}
    >
      {reviewData.map((review) => (
        <section
          key={review.id}
          className={`bg-neutral-900 bg-opacity-40 rounded-xl p-10 cursor-pointer space-y-9 shadow ${inView === review.id ? "" : "h-60"}`}
          onClick={() => handleClick(review.id)}
        >
          <img
            src="/assets/star.svg"
            alt="rating"
            className="w-36 h-6"
          />
          <p className="text-white text-opacity-60 text-base font-medium leading-loose">
            {review.comment}
          </p>
          {inView === review.id && (
            <section className="flex items-center space-x-6">
              <section className="bg-white w-20 h-20 flex items-center justify-center rounded-full">
                <img
                  src={review.reviewerIcon}
                  alt={`Reviewer Avatar - ${review.reviewer}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </section>
              <section className="space-y-1">
                <p className="text-white text-2xl font-bold leading-loose">
                  {review.reviewer}
                </p>
                <p className="text-white text-base font-normal leading-loose">
                  {review.company}
                </p>
              </section>
            </section>
          )}
        </section>
      ))}
    </motion.section>
  );
};

export default Reviews;
