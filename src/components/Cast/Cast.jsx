import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'Api';
import Error from 'components/Error/Error';
import { CastList } from './Cast.styled';
import CastDetail from 'components/CastDetail/CastDetail';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastInf() {
      try {
        const respCast = await fetchCastMovie(movieId);
        setCast(respCast.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchCastInf();
  }, [movieId]);

  return (
    <>
      {error && <Error />}
      {cast && (
        <div>
          <CastList>
            {cast.map((actor, id) => {
              return <CastDetail cast={actor} key={actor.id} />;
            })}
          </CastList>
        </div>
      )}
    </>
  );
};

export default Cast;
