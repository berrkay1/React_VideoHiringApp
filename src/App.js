import './App.css';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <Grid style={{justifyContent:'center'}} container spacing={10}>
      <Grid item xs={12}>
        <SearchBar/>
      </Grid>
      <Grid item xs={8}>
        <VideoDetail/>
      </Grid>
      <Grid item xs={4}>
        <h1>video listt</h1>
      </Grid>
      
    </Grid>
    
  );
}



export default App;
