import React from 'react';
import SideBar from './components/SideBar/SideBar';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import { useAppDispatch, useAppSelector } from './rtk/hooks/hooks';

  const App: React.FC = () => {
    
    const dispatch = useAppDispatch()
    const { homePageState, searchPageState } = useAppSelector(state => state.pages)
    
    return (
    
      <div className="App relative bg-slate-900 w-screen h-screen overflow-scroll flex flex-row justify-start items-start m-0 p-0">

        <SideBar />

        {homePageState ? <HomePage /> : null}

        {searchPageState ? <SearchPage /> : null}

      </div>

    )
  }

export default App;

