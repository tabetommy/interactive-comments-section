/*import React from 'react';
import Comments from './Comments';

const Comment=({usersData})=>{
    const commentsData=usersData.comments.map(userData=>{
      return <Comments
      key={userData.id}
      content={userData.content}
      createdAt={userData.createdAt}
      score={userData.score}
      pngImg={userData.user.image.png}
      webpImg={userData.user.image.webp}
      username={userData.user.username}
      currentUser={usersData.currentUser.image.png}
      />
    })
    return(
      <div>
          {commentsData}
      </div>
    )
}
 {show?
            <div className="bg-white flex-row md:flex justify-around items-start  w-4/5 mx-auto rounded-lg pb-4">
                <img className="hidden md:block ml-2 mt-5" src={props.currentUser} alt="juliosomo"/>
                    <form className='md:flex justify-between items-start w-11/12 mx-auto rounded-lg'>
                        <textarea 
                            className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 rounded-lg'
                            value={textarea} 
                            rows="4"
                            placeholder='Add a comment...'
                            onChange={handleChange}></textarea>
                        <div className='flex justify-between md:hidden w-full'>
                            <img className="w-12 ml-2 mt-5" src={props.currentUser} alt="juliosomo"/>
                            <button className='sendBtn rounded-lg px-6 py-3 mr-2 mt-5 '>SEND</button>
                        </div>
                        <button className='sendBtn hidden md:block md:w-24 rounded-lg px-6 py-3 mr-2 mt-5 '>
                            REPLY
                        </button>
                    </form>
            </div>
            :
            null}

   const handleChange = (event) => {
        setTextarea(event.target.value)
    }
  const [textarea,setTextarea]=useState("");

export default Comment;*/