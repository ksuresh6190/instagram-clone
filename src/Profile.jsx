import React, { useState } from 'react'
import useFetch from './useFetch'
import Sidebar from './Sidebar';
import Footer from './Footer';


function Profile() {
    const [profile]=useFetch('http://localhost:3000/profile');
    const [setting, setSetting] =useState(false);
    const [highlight, setHighlight] =useState(false);

    const openSetting = () =>{
        setSetting(!setting)
    };
    const closeSetting = () =>{
        setSetting(false)
    };
    const highLight = () =>{
        setHighlight(!highlight)
    }
    const closeHighLight = () =>{
        setHighlight(false)
    }
   return (
    <div className='d-flex'>
        <div className='w-60'>
        <Sidebar/>
        </div>
       <div className='vh-200'>
        <div className='d-flex flex-column align-items-center'>
            {profile.map((profile )=> (
            <div  key={profile.id} className='d-flex align-items-center justify-content-center gap-4'>
                <div className='d-flex align-items-center justify-content-center my-5'>
                    <img src={profile.profilePic} alt="profilePic" className='rounded-circle profile-profile-pic m-5' />
               </div>
               <div className='d-flex flex-column gap-4'>
                    <div className='d-flex align-items-center gap-3'>
                     <h4>{profile.username}</h4>
                     <button className='btn btn-secondary'>Edit profile</button>
                     <button className='btn btn-secondary'>View archive</button>
                     <h3 onClick={openSetting}><i className="bi bi-gear-wide"></i></h3>
                    </div>
                    <div className='d-flex gap-4'>
                    <p>{profile.posts} <span className='text-white-50'>post</span></p>
                    <p>{profile.followers} <span className='text-white-50'>followers</span></p>
                    <p>{profile.following} <span className='text-white-50'>following</span></p>
                    </div>
                    <div className='d-flex flex-column'>
                    <p><b>{profile.fullName}</b></p>
                    <p className='text-wrap w-50'>{profile.bio}</p>
                    </div>
               </div>            
            </div>
        ) )}
         <div>
        {setting ? (
        <div className='pop-up'>
            <div className="setting">
                <ul>
                    <li>Apps and websites</li>
                    <li>Professional account</li>
                    <li>QR code</li>
                    <li>Notification</li>
                    <li>Setting and privacy</li>
                    <li>Supervision</li>
                    <li>Login activity</li>
                    <li>Log out</li>
                    <li onClick={closeSetting}>Cancel</li>
                </ul>
            </div>
        </div>) :(<div></div>)}
       </div>
       <div className='d-flex gap-2 highls'>
        <div className='d-flex flex-column align-items-center'>
            <div className='highlights' onClick={highLight}>
                +
            </div>
            <p>New</p>
        </div> 
       </div>
       {highlight ? (
        <div className='new-highlight'>
            <div className="highlight">
                <div className='d-flex h-1 ms-auto'>
                    <p onClick={closeHighLight} className=''>x</p>
                    <h4>New Highlight</h4>
                </div>
                <div className='h-2'>
                    <input type="text" placeholder='Highlight Name' />
                </div>
                <div className='h-3'>
                    <p>Next</p>
                </div>
            </div>
        </div>) :(<div></div>)}


       </div>

        <div className='d-flex align-items-center justify-content-center'>
            <div className='profile-post d-flex align-items-center'>
                <i className='bi bi-grid-3x3'></i>
                <i className='bi bi-bookmark'></i>
                <i className='bi bi-person-square'></i>
            </div>
        </div>
        <div>
        {profile.map((profile)=>(
        <div className='d-flex' key={profile.id}>
            <img src={profile.profilePic} alt="" className='w-30 mx-5 border border-secondary border-1' />
        </div>

))}
        </div>

       <div>
        <Footer/>
       </div>
        </div>
    </div>
  )
}

export default Profile