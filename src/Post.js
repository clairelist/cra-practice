import {useState} from 'react';

const defaultPost = {
    title : '',
    content: ''
}; 

function Post(){
    const [post, setPost] = useState(defaultPost);

    const handleChange = (args) =>{
        setPost(args);
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
        <input type="textarea" name="content" />
        </label>
        
</form>
        </div>
    )
}

export default Post;