
// import Typewriter from "typewriter-effect";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {

    return (
      <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                      Cluster-Prism
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>  
      </div>
    )
};

export default Navbar;

/*
<div className="intro-header">
          <a href="#home" className="flex">
            <p className="text-first-light">Arpan</p>
            <p className="text-last-light">Neupane</p>
          </a>
          </div>
*/