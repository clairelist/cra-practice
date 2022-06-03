import {useState} from 'react';

import './Post.css';

const defaultPost = {
    title: 'DEFAULT TITLE!',
    content: 'DEFAULT CONTENT!'
}; 

function Post(){
    const [post, setPost] = useState(defaultPost); //...we will POST post data from here later ! So we can persist in everyone's favorite -- the database woooo

    const handleChange = (event) =>{
        setPost(event.target.value);
    }

    const handleSubmit = (event) =>{ //call!
        event.preventDefault();
        setPost(event.target.value); //this is not correct LOL
    }
    return(
        <div>
            <h2>POST component!</h2>
<form className='text-input'>
        <label>
        Title {'->'}
        <input 
        type="text" 
        name="title" 
        // value={post.title}
        // onChange={handleChange}
         />
        </label>

        {/* <label>
            Content _
        <input 
        type="textarea" 
        name="textarea" 
        rows={200} 
        cols={25} 
        value={post}
        onChange={handleChange}
       
        />
        </label> */}

        <textarea 
        placeholder={'post some nonsense!'} 
        //  value={defaultPost} 
        //  onChange={handleChange}
         >

        </textarea>
        
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