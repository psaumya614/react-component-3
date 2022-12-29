import {useParams} from 'react-router-dom';
import Blog1 from './blog1';
import Blog2 from './blog2';

function SingleBlog(){

    const {blogid} = useParams();
    if(blogid  === '1' ) return <Blog1 />
    if(blogid === '2') return <Blog2 />
    return(
        <div><h1>Hello i am SingleBlog</h1></div>
    );
}

export default SingleBlog;