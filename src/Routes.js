import {Route, Routes} from 'react-router-dom';
//HEY FUTURE CLAIRE:: THIS VERSION OF ROUTE USES THE BELOW 'ELEMENT' PATTERN RATHER THAN COMPONENTS. YEAH IT'S STUPID AND I HATE IT TOO.
//import Home from './Home';
import Page from './Page';
import Post from './Post';

function Routing(){
    return(
        <Routes>
        {/* <Route exact path='/home' element={<Home /> } /> */}
        <Route exact path='/user' element={<Page /> } />
        <Route exact path='/post' element={<Post /> } />
        </Routes>
    )
}

export default Routing;