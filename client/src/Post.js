import { format, formatISO9075 } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({ _id,title, summery, cover, content, createdAt ,author}) {
    return (
        <div className="post">
            <div className="image">
              <Link to ={`/post/${_id}`}>
                <img src={'https://myblogbynilesh.onrender.com/'+cover} alt="" />
              </Link>
                
            </div>
            <div className="text">
            <Link to ={`/post/${_id}`}>
            <h2>{title}</h2>
              </Link>
                
                <p className='info'>
                    <a className='author'>{author.username}</a>
                    <time>{format(new Date(createdAt), "dd-MM-yyyy  HH:mm:ss")}</time>
                </p>
                <p className='summary'>{summery}</p>
            </div>
        </div>
    );
}
