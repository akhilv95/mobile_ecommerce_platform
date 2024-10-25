import{Link} from 'react-router-dom';
import logo from "../logo.svg";

function Navbar(){
    const navStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',  // Make sure text is readable on the background
      };
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" style={navStyle}>
        <Link to="">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <b><Link class="nav-link" style={{color:'yellow'}} to="/products">Products</Link></b>
            </li>
            <li class="nav-item">
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
            </li>
           
          </ul>
          <form class="">
          <Link to="/cart" className="ml-auto">
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
           MyCart
        </Link>
          </form>
        </div>
      </nav>
    )
}
export default Navbar;