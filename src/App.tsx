import MoviesList from './components/MoviesList/MoviesList';
import SideBar from './components/SideBar/SideBar';

function App() {

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

