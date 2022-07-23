import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark sticky-top bg-dark">
      <div className="container">
        <NavLink to="/#">
        <div>
        <img
           src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/logo.svg" alt="YouThink" />
        </div>
           </NavLink>
        <div className="collapse navbar-collapse">
          <div>
          </div>
          <div id="butt">
            
              <li>
              <NavLink to="/#">
              HOME
              </NavLink>
              </li>

              <li>
              <NavLink to="/blog">
               BlOG
              </NavLink>
              </li>
              
          </div>
        </div>
      </div>
    </nav>
  )}
  
export default Nav;
