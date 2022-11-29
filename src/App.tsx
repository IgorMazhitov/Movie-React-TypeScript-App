
import React, { useEffect } from 'react';
import { MovieCard } from './components/movieCard/MovieCard';
import NewAndSoon from './components/MoviesButtons/NewAndSoon';
import PagesSwitcher from './components/MoviesButtons/PagesSwitcher';
import MoviesList from './components/MoviesList/MoviesList';
import SideBar from './components/SideBar/SideBar';
import { useAppDispatch, useAppSelector } from './rtk/hooks/hooks';
import { setMovies } from './rtk/slices/movieSlice';

function App() {

  const dispatch = useAppDispatch()

  const {page, service, type, genre, moviesArray, country} = useAppSelector(state => state.movies)
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ccd75df03msh4bd02ee4f2df42ap16cf8ajsnd10916768322',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  const requestUrl: string = 'https://streaming-availability.p.rapidapi.com/search/basic?country=' + country + '&service=' + service + '&type=' + type
  interface results {
    movies: any[]
    total_pages: number
  }

  const clickHandler = () => {
    dispatch(setMovies([1, 2, 3, 4, 5, 6, 7, 8]))
  }

  useEffect(() => {
    console.log(moviesArray)
  }, [moviesArray])

  return (
    <div className="App relative bg-slate-900 w-screen h-screen overflow-scroll flex flex-row justify-start items-center">
      <SideBar />
      <div className='flex flex-col justify-start items-start w-full max-h-full'>
        <NewAndSoon />
        <MoviesList newList={true}/>
        <MoviesList soonList={true}/>
      </div>
    </div>
  );
}

export default App;

