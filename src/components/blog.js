import {Outlet} from 'react-router-dom';
function Blog(){
    return(
        <div>I am Blog component
            <Outlet />
        </div>
    );
}

export default Blog;