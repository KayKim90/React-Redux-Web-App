import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveMoviesTrending } from '../redux/actions/trendingMovies';
import { saveSearchData } from '../redux/actions/searchData';
import Card from './Card';
function MovieList() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.trendingMovieReducer.results);
  const loading = useSelector((state) => state.trendingMovieReducer.loading);
  const error = useSelector((state) => state.trendingMovieReducer.error);
  const searchData = useSelector((state) => state.searchDataReducer.results);
  const searchloading = useSelector((state) => state.searchDataReducer.loading);
  const searcherror = useSelector((state) => state.searchDataReducer.error);
  const [searchValue, setSearchValue] = useState({
    media: '',
    query: '',
  });
  const [contents, setContents] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    setSearchValue({
      ...searchValue,
      [name]: event.target.value,
    });
  };
  function handleDataChange() {
    dispatch(
      saveSearchData({
        media: searchValue.media,
        query: searchValue.query,
      }),
    );
    console.log(searchData);
  }
  function sortAlpha() {
    const sorted = [...contents].sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    console.log(sorted);
    setContents(sorted);
  }
  function sortDesc() {
    const sorted = [...contents].sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
    console.log(sorted);
    setContents(sorted);
  }
  useEffect(() => {
    dispatch(saveMoviesTrending());
  }, []);

  useEffect(() => {
    setContents(results);
  }, [results]);

  useEffect(() => {
    if (searchData) {
      setContents(searchData);
    }
  }, [searchData]);
  if (loading || searchloading) return <div>Loading</div>;
  if (error || searcherror) return <div>Error</div>;
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Select movie, tv, or all"
        name="media"
        value={searchValue.media}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Search for your title or genere"
        name="query"
        value={searchValue.query}
        onChange={handleChange}
      />
      <button className="search-btn" onClick={handleDataChange}>
        Search
      </button>

      <div className="dropdown">
        <button className="dropbtn">Sorting</button>
        <div className="dropdown-content">
          <p className="dropdown-item" onClick={sortAlpha}>
            Title Ascending
          </p>
          <p className="dropdown-item" onClick={sortDesc}>
            Title Descending
          </p>
        </div>
      </div>

      <div className="row">
        {contents &&
          contents.length > 0 &&
          contents.map((item, index) => (
            <div key={index} className="col-4">
              <Card movie={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
