import {Link} from 'react-router-dom';

function NavBar(){
    return (
      <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to='/'>Tech37</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/blog'>Blog</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/ContactMe'>ContactMe</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }


  export default NavBar;