import React from 'react';

interface ReviewCardProps {
  quote: string;
  author: string;
  title: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ quote, author, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 opacity-90 hover:opacity-100">
      <p className="text-xl italic text-gray-700 mb-6">&quot;{quote}&quot;</p>
      <div className="flex items-center mt-2">
        <div className="ml-0">
          <p className="text-gray-800 font-semibold">{author}</p>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
