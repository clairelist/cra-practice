import {useState} from 'react';

import './Post.css';

const defaultPost = {
    title: 'DEFAULT TITLE!',
    content: 'DEFAULT CONTENT!'
}; 

function Post(){
    const [post, setPost] = useState(defaultPost); //...we will POST post data from here later ! So we can persist in everyone's favorite -- the database woooo

    const [posts, setPosts] = useState([post]);

    const handleChange = (event) =>{
        setPost({...post, [event.target.name]: event.target.value});
        //we MUST both have the whole post object, AND destructure the target name
        //and set it to the target VALUE. This will ensure control (1 other thing needed schon jetzt)
    }

    const handleSubmit = (event) =>{ //missing a piece. Waiting...
        event.preventDefault();
        setPosts([...posts, post]);
    }
    return(
        <div>
            <h2>POST component!</h2>
<form className='text-input' onSubmit={handleSubmit}>
        <label>
        Title {'->'}
        <input 
        type="text" 
        name="title" 
        value={post.title}
        onChange={handleChange}
         />
        </label>

        <label>
            Content _
        <input 
        type="textarea" 
        name="content" 
        value={post.content}
        onChange={handleChange}
       
        />
        </label>

        {/* <textarea 
        placeholder={'post some nonsense!'} 
        value={defaultPost} 
        onChange={handleChange}
         >

        </textarea> */}
        
</form>
        <input
        type='submit'
        value='Post'
        onClick={handleSubmit}
        >

        </input>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        </div>
    )
}

export default Post;