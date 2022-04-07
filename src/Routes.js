import {Route} from 'react-router-dom';
//import Home from './Home';
import Page from './Page';
import Post from './Post';

function Routes(){
    return(
        <div>
        {/* <Route exact path='/home' component={Home} /> */}
        <Route exact path='/page' component={Page} />
        <Route exact path='/post' component={Post} />
        </div>
    )
}

export default Routes;