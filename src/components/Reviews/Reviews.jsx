import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from 'Api';
import Error from 'components/Error/Error';
import ReviewDetail from 'components/ReviewDetail/ReviewDetail';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const respReviews = await fetchReviewsMovie(moviesId);
        setReviews(respReviews.results);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchReviews();
  }, [moviesId]);

  return (
    <>
      {error && <Error />}
      {reviews && (
        <div>
          <ul>
            {reviews.map((review, index) => (
              <ReviewDetail key={index} review={review} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
