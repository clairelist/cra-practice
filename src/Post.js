import {useState} from 'react';

import './Post.css';

const defaultPost = {
    title: '',
    content: ''
}; 

function Post(){
    const [post, setPost] = useState(defaultPost); //...we will POST post data from here later ! So we can persist in everyone's favorite -- the database woooo

    const handleChange = (event) =>{
        setPost({value: event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    return(
        <div>
            <h2>POST component!</h2>
<form>
        <label>
        Title
        <input type="text" name="title" />
        </label>

        <label>
        <input type="textarea" name="content" rows={200} cols={25} />
        </label>
        
</form>
        </div>
    )
}

export default Post;