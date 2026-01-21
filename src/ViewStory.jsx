import React from 'react'
import { useParams , Link, useNavigate} from 'react-router-dom'
import useFetch from './useFetch';

function ViewStory() {
  const {id, tot} = useParams();
  const [story]=useFetch(`http://localhost:3000/story/${id}`);
  const navigate = useNavigate()
  if (id > tot || id <=0 ){
    navigate('/')
  }

  return (
    <div>
      <div className='viewStory d-flex align-items-center vh-100 justify-content-center'>
        <Link to={`http://localhost:5173/viewStory/${Number(id)-1}/${tot}`}><i className='bi bi-chevron-left'></i></Link>
        <img className='w-50' src={story.storyPic} alt="" />
        <Link to={`http://localhost:5173/viewStory/${Number(id)+1}/${tot}`}><i className='bi bi-chevron-right'></i></Link>
      </div>
    </div>
  )
}

export default ViewStory