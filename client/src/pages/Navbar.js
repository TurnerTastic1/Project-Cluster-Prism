
// import Typewriter from "typewriter-effect";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
                      Cluster-Prism
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>  
    </div>
  );
};

export default Navbar;

/*
<div classNameName="intro-header">
          <a href="#home" classNameName="flex">
            <p classNameName="text-first-light">Arpan</p>
            <p classNameName="text-last-light">Neupane</p>
          </a>
          </div>
*/