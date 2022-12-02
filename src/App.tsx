import { useEffect } from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import SideBar from './components/SideBar/SideBar';
import { useAppDispatch } from './rtk/hooks/hooks';
import { getMovies, setLoadingState } from './rtk/slices/movieSlice';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {

    const params = {
      country: 'us',
      service: 'netflix',
      type: 'movie',
      page:  1,
      output_language: 'en',
      language: 'en'
    }
    
    dispatch(setLoadingState(true))
    dispatch(getMovies(params))
  }, [])

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

