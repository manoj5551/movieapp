import { Button, Tab, Tabs, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";


const Search =()=> {
  const[type,setType] = useState(0);
  const[page,setPage] = useState(1);
  const[searchText,setSearchText] = useState("");
  const[content,setContent] = useState("");
  
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      //console.log(data.results);
    } catch (error) {
      console.error(error);
      //console.log(error.message);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div style={{display:"flex",margin:"15px 0"}}>
          <TextField 
          style={{flex:1, backgroundColor:"grey"}}
          className="searchBox"
          variant="filled"
          label="Search"
          onChange={(e)=>setSearchText(e.target.value)}
          />
          <Button variant='contained'
          onClick={fetchSearch}
          style={{marginLeft:10 ,backgroundColor:"grey" }}><SearchIcon fontSize="large"/></Button>
      </div>
      <Tabs value={type} 
        indicatorColor='primary'
        textColor='primary' 
      onChange={(event,newValue)=>{
        setType(newValue);
        setPage(1);
      }}
      style={{paddingBottom:5}}
      >
        <Tab style={{width:"50%"}} label="search Movies"/>
        <Tab style={{width:"50%"}} label="search TV "/>
      </Tabs>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  )
}

export default Search
