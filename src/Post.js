import {useState} from 'react';

import './Post.css';

const defaultPost = {
    title: '',
    content: ''
}; 

function Post(){
    const [post, setPost] = useState(defaultPost); //...we will POST post data from here later ! So we can persist in everyone's favorite -- the database woooo

    const [posts, setPosts] = useState([defaultPost]);

    const handleChange = (event) =>{
        setPost({...post, [event.target.name]: event.target.value});
        //we MUST both have the whole post object, AND destructure the target name
        //and set it to the target VALUE. This will ensure control (1 other thing needed schon jetzt)
    }

    const handleSubmit = (event) =>{ 
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
        placeholder="TITLE your inane babbling"
        value={post.title}
        onChange={handleChange}
         />
        </label>

        <label>
            Content {'->'}
        <input 
        type="textarea" 
        name="content" 
        placeholder="What have you to SAY?"
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
       
{/*remember to MAP OVER ALL POSTS, SO THAT WE CAN ACTUALLY DISPLAY THEM::*/}
{posts.map((post, idx) => (
    <div className='post-reader' key={idx}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </div>
))}
 </div>

    )
}

export default Post;

