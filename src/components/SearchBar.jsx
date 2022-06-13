import React, { useEffect,useState } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {useSelector,useDispatch} from 'react-redux'
import {fetchVideos} from '../redux/videoSlice'

function SearchBar() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.video.items)
    // const error = useSelector(state => state.video.error)
    // const loading = useSelector(state => state.video.loading)
    

    const [search,setSerch] =useState('')

    console.log(items);

    useEffect(() => {
        dispatch(fetchVideos(search))
    }, [dispatch,search]);



  return (
    <Paper elevation={6} style={{padding: '20px'}}>
        <TextField fullWidth
        label="Search..."
        value={search}
        onChange={(e) => setSerch(e.target.value)}

        />
    </Paper>
  )
}

export default SearchBar