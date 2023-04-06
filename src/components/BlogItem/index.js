// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {ItemDetails} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = ItemDetails
  return (
    <Link to={`/blogs/${id}`} className="">
      <div className="list-container">
        <img src={imageUrl} alt={avatarUrl} className="image-L-sizing" />
        <div className="container-column">
          <p className="react-naming-style">{topic}</p>
          <h1 className="link-style">{title}</h1>
          <div className="container-profile-img">
            <img
              src={avatarUrl}
              alt={imageUrl}
              className="profile-img-sizing"
            />
            <p className="profile-nameing-style">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
