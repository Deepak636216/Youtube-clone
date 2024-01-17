import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';

import { Navabar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './components';

const App = () => 
  (
    <BrowserRouter>
        <Box sx={{ background: '#0000'}}>
            <Navabar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id"  element={<VideoDetail />}/>
                <Route path="/channel/:id"  element={<ChannelDetail />}/>
                <Route path="/search/:searchTerm"  element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App