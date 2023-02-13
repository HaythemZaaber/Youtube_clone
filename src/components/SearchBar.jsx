import React, {useState} from 'react'
import { Paper, IconButton } from '@mui/material'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Search from '@mui/icons-material/Search';


const SearchBar = () => {
  const [search, setSearch]= useState("")
  const navigate = useNavigate()
  const currentUrl = window.location.href;

  function handleSubmit(e){
    e.preventDefault()

    if(search){
      navigate(`/search/${search}`)

      setSearch('')
    }
  }
  
  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{backgroundColor:"white", borderRadius:20, alignItems:"center", display:"flex", justifyContent:"space-between", pl:2, boxShadow:"none", mr:{sm:5}}}>
        <input className='search-bar' placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <Link to={search ? `/search/${search}`: currentUrl}>
        <IconButton sx={{color:"red", p:2}}> 
        <Search/>
        </IconButton>
        </Link>
    </Paper>
  )
}

export default SearchBar