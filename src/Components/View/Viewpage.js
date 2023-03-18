import "./Viewpage.css"
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Viewpage = ({feed}) => {

    const { id } = useParams();
    const post = feed.find((post) => post.id === parseInt(id));

  return (
    <div className='mx-5 p-5'>
      <h2 className='p-5'>{post.title}</h2>
      <p className='py-1 px-5' id="line-alteration">{post.content}</p>
      <Link to="/post" className="btn btn-primary ml-5">Back to Feed</Link>
    </div>
  )
}

export default Viewpage;
