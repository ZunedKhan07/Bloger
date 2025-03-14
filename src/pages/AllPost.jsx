import React, {useState, useEffect} from 'react'
import PostCard from '../components/PostCard';
import appwriteService from "../appwrite/ConfigeDB";
import Container from '../container/Container';

function AllPost() {
    const [post, setPost] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPost([]).then((posts) => {
        if (posts) {
            setPost(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPost