// import styles from './NavBar.module.css';
import logo from './logo.png'
import './NavBar.css'
const NavBar = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a className="navbar-brand" href="#">
                <img src={logo} alt='logo' className='logo'/>
                <h2 className='text-white'>Halyk</h2>
         </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Сканировать QR</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link text-white" href="#"></a>
              </li> */}
            </ul>
            <a class="navbar-text text-white text-decoration-none cursor-pointer">
              Log Out
            </a>
          </div>
        </div>
      </nav>
        
    )
}

export default NavBar;