import useFetch from './useFetch'

function suggestion() {
  const [suggestion]=useFetch('http://localhost:3000/suggestion');
  const [profile]= useFetch('http://localhost:3000/profile');

  return (
    <div className=' d-flex flex-column gap-4'>
      <div className='profile d-flex '>
           {profile.map((profile)=>(
            <div className='d-flex gap-1 w-90' key={profile.id}>
              <img className='profile-pic rounded-circle' src={profile.profilePic} alt="profilePic" />
              <h5 className='m-3'>{profile.username}</h5>
              <small className='text-primary ms-auto m-3 pointer'><b>switch</b></small>
            </div>           
           ))}
           </div>
           <div className='d-flex w-80 s-f-u'>
            <p className='text-secondary'>Suggested for you</p>
            <p className='ms-auto text-white fs-6 pointer'>See All</p>
            </div>
            <div className='suggestion d-flex flex-column gap-3 w-90'>
              {suggestion.map((suggestions)=>(
              <div key={suggestions.id}>
                <div className='d-flex gap-3 align-itmes-center'>
                  <img className='rounded-circle profile-pic' src={suggestions.profilePic} alt="profilePic" />
                  <h5>{suggestions.username}</h5>
                  <div className='d-flex gap-4 ms-auto'>
                    <p className='text-primary fs-6 pointer'>Follow</p>
                    <p className='btn-secondary fs-6 pointer'>x</p>
                  </div>
                </div>
              </div>
                ))}
            </div> 
            <div className='sug-footer'>
              <footer>
                <ol>
                  <li>About .</li>
                  <li>Help .</li>
                  <li>Press .</li>
                  <li>API .</li>
                  <li>Jobs .</li>
                  <li>Privacy .</li>
                  <li>Terms .</li>
                  <li>Location .</li>
                  <li>Language .</li>
                  <li>Meta Verified</li>
                  <li className='text-uppercase'> &copy; 2025 Instagram from Meta</li>
                </ol>
              </footer>
             
            </div>
      <div className='d-flex align-items-center position-fixed bg-gray messages'>
        <small><i className="bi bi-messenger"> Messages</i></small>
      </div>
    </div>
  )
}
export default suggestion