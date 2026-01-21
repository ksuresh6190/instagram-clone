import useFetch from "./useFetch";

function Post() {
 
  const [post] = useFetch('http://localhost:3000/datas');

  return (
    <div>
      <div className="d-flex flex-column w-75 m-auto gap-4">
        {post.map((post) => (
          <div key={post.id}>
            <div className="d-flex align-items-center">
                <img className="rounded-circle profile-pic m-2" src={post.profilePic} alt="profile"/>
                <h5>{post.username}</h5>
            </div>
            <div>
                <img className="w-100 post-img" src={post.posts.imageUrl} alt="post_Image" />
                <p>{post.posts.caption}</p>
            </div>
            <div className="d-flex align-items-center gap-3">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
            </div>
            <div>
                <p>{post.posts.likes} likes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
