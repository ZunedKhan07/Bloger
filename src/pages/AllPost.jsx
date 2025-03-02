import React, {useState, useEffect} from 'react'
import appwriteServise from '../appwrite/ConfigeDB'
import { Container, PostCard } from '../components'

const AllPost = () => {
    const AddPost = () => {
        const [posts, setPosts] = useState([])
        useEffect(() => {
            appwriteServise.getPosts([]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        }, [])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
   )
 }
}

export default AllPost
