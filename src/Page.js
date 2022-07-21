import { useState, useEffect } from 'react';

//I need to: get user info on mount of this component and display it. Also to include in stretch goals:: ability to edit this page 
function Page(props){
  
    return(
        <div>
            <h2 className='page-viewer-header'>Your PROFILE page!</h2>
            <p>This is my profile page it has information about me as a person.</p>
        </div>
    )
}

export default Page;