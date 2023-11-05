import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Pages/User/userSlice";
import { useRef } from "react";
const Navbar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <button
            ref={navButton}
            class="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            ref={linksContainerRef}
            class="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item py-3">
                <NavLink
                  onClick={collapseNav}
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.activeStyle : styles.inactiveStyle
                  }
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item py-3">
                <NavLink
                  onClick={collapseNav}
                  class="nav-link active"
                  aria-current="page"
                  to="/another"
                  className={({ isActive }) =>
                    isActive ? styles.activeStyle : styles.inactiveStyle
                  }
                >
                  another
                </NavLink>
              </li>

              {!user ? (
                <>
                  <li class="nav-item ">
                    <NavLink
                      onClick={collapseNav}
                      to="login"
                      className={({ isActive }) =>
                        isActive ? styles.activeStyle : styles.inactiveStyle
                      }
                    >
                      <button className={styles.login}>Log In</button>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      onClick={collapseNav}
                      to="signup"
                      className={({ isActive }) =>
                        isActive ? styles.activeStyle : styles.inactiveStyle
                      }
                    >
                      <button className={styles.signup}>Sign Up</button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    {user?.email}
                    <button className={styles.signout} onClick={handleLogout}>
                      Sign Out
                    </button>{" "}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.separator}></div>
    </>
  );
};

export default Navbar;
