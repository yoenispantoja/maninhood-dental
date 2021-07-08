import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { getPostAction } from '../redux/postDucks';

const Post = () => {

  const dispatch = useDispatch();
  const post = useSelector(store=>store.posts.array);

  return (
    <div>
      Post list
      <button onClick={()=>dispatch(getPostAction())}>Get post</button>
      <ul>
        {
          post.map(item=>(
            <li key={item.id}>{item.titulo}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Post
