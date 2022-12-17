
import React from 'react' ;
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";


const MoviesList = () => {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title }
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>   
    </div>
  );
};

export default MoviesList;