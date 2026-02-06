import React from 'react'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom';

function Story() {

    const [story] = useFetch('\public\data.json');
    const navigate = useNavigate();
    let tot= story.length;
  return (
    <div>
        <div className='story-head d-flex m-4 w-90 gap-2'>
            {story.map((story)=>(
                <div className='d-flex flex-column align-items-center' key={story.id} onClick={()=>navigate(`/viewStory/${story.id}/${tot}`)}>
                    <div className='story-pic'>
                        <img src={story.profilePic} alt="profilePic" className='rounded-circle story-profile-pic' />
                    </div>
                    <p className='text-truncate' style={{width:"80px"}}>{story.username}</p>
                </div>
            ))}
        </div>
    </div>
  )
}47

export default Story
