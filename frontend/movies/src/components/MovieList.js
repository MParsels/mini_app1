import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie_title d-flex justify-content-start m-3'>
                    <div>{movie.title}</div>
				</div>
			))}
		</>
	);
};

export default MovieList;