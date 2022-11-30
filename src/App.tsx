
import React, { useEffect } from 'react';
import { MovieCard } from './components/movieCard/MovieCard';
import PagesSwitcher from './components/MoviesButtons/PagesSwitcher';
import MoviesList from './components/MoviesList/MoviesList';
import SideBar from './components/SideBar/SideBar';
import { useAppDispatch, useAppSelector } from './rtk/hooks/hooks';
import { setMovies } from './rtk/slices/movieSlice';

function App() {

  const dispatch = useAppDispatch()

  const {searchPage, searchService, searchType, searchGenres, moviesArray, searchCountry} = useAppSelector(state => state.movies)
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ccd75df03msh4bd02ee4f2df42ap16cf8ajsnd10916768322',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  const requestUrl: string = 'https://streaming-availability.p.rapidapi.com/search/basic?country=' + searchCountry + '&service=' + searchService + '&type=' + searchType
  interface results {
    movies: any[]
    total_pages: number
  }

  return (
    <div className="App relative bg-slate-900 w-screen h-screen overflow-scroll flex flex-row justify-start items-start m-0 p-0">
      <SideBar />
      <div className='flex flex-col justify-start items-start w-full max-h-full pt-32'>
        <MoviesList />
      </div>
    </div>
  );
}

export default App;

