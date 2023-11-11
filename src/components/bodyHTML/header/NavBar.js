import styles from './NavBar.module.css';
import logo from './logo.png'
const NavBar = () =>{
    return(
        <nav className={styles.navbar}>
            
            <ul className={styles.list}>
                <a class="navbar-brand" href="#">
                    <img src={logo} alt='logo' className={styles.img}/>
                </a>
                <li>Home</li>
                <li>page</li>
            </ul>
        </nav>
    )
}

export default NavBar;