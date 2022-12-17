import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import Trending from './Pages/Trending/Trending';
import  MoviesList  from './Pages/MoivesList/MoviesList';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';



function App() {
  return(
    <BrowserRouter>
      <Header/>

      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending/>} exact></Route>
            <Route path='/movies' element={<MoviesList/>}></Route>
            <Route path='/series' element={<Series/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation/>

    </BrowserRouter>  
  ) 
}

export default App;
