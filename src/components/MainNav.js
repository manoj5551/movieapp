import * as React  from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" , position:"fixed" , bottom:0 , zIndex:100 , backgroundColor:"black"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       <Link to="/"><BottomNavigationAction style={{color:"black"}} label="Trending" icon={<WhatshotIcon/>} /></Link>
       <Link to="/movies"><BottomNavigationAction style={{color:"black"}} label="Movies" icon={<MovieIcon />} /></Link>
       <Link to="/series"><BottomNavigationAction style={{color:"black"}} label="Tv series" icon={<TvIcon />} /></Link>
       <Link to="/search"><BottomNavigationAction style={{color:"black"}} label="Search" icon={<SearchIcon />} /></Link>
      </BottomNavigation>
    </Box>
  );
}