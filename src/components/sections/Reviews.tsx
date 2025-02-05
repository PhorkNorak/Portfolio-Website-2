import React from 'react';
import ReviewCard from '../ReviewCard';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ReviewCard
            quote="Engaging & Flexible Mentor! He was always thoughtful and empathetic, answering every question with care and expanding the student's IT knowledge. His flexible approach ensured lessons were tailored to the student's level and interests, making learning both effective and enjoyable."
            author="Yuriko Kamiyama"
            title="Manager of WEAVE"
          />
          <ReviewCard
            quote="Before you taught me, I knew nothing about AI. But thanks to you, I’ve learned so much! I really appreciate your time, patience, and support in showing me the way. Thank you for everything Bong  Norak!"
            author="Meng Kimhneng"
            title="Student in ME-NEXT program"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
