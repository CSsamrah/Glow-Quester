import './App.css';
import Navbar from './Navbar';
import MainVideo from './MainVideo';
import { Box } from '@mui/material';
import Properties from './Properties';
import Description from './Description';
import TopPicks from './TopPicks';
import Services from './Services';
import Footer from './FooterEnd';

function App() {
  return (
    <Box>
    <div>
      <Navbar/>
      <MainVideo/>
    </div>
    {/* <Box className='mainvideo'>
      <MainVideo/>
    </Box> */}
    <Box>
      <Properties/>
      </Box>
      <Box>
        <Description/>
      </Box>
      <Box>
        <TopPicks/>
      </Box>

      <Box>
        <Services/>
      </Box>
      <Box>
        <Footer/>
      </Box>
  </Box>
  );
  

}

export default App;
