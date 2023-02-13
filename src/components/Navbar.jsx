import React from 'react'
import {Link} from "react-router-dom"
import { Stack } from '@mui/system'
import {logo} from "../utils/constants"
import SearchBar from "./SearchBar"
const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky", top:0, justifyContent:"space-between", backgroundColor:"#000", zIndex:2}}>
      <Link to="/" sx={{display:"flex", alignItems:"center"}}>
      <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar