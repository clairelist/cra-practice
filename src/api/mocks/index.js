import {v4 as uuid} from 'uuid'; //gives us access to the id randomizer; will be postId

const initPosts = [
    {
        id: uuid(),
        title: '',
        content: '',
    },
]

//simulating a GET & POST requests; will use Promise.resolve(object)

export const axios = {
    get() {
      return Promise.resolve({ status: 200, success: true, data: initPosts })
    },
    post(url, { title, content }) {
      const newPost = { id: uuid(), title, content }
      return Promise.resolve({ status: 200, success: true, data: newPost })
    }
  }
  //remember to IMPORT this as 'axios' in Post component