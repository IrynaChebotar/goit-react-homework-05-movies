import React from 'react';
import { ReviewsWrapper } from './Revievs.styled';

const Reviews = ({ reviews }) => (
  <ReviewsWrapper>
    <h2>Reviews</h2>
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </ul>
  </ReviewsWrapper>
);

export default Reviews;
