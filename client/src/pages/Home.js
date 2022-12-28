import React, { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import Typewriter from "typewriter-effect";
import "../css/Home.css";
import { useLocation } from "react-router-dom";

export function ChangeTitle() {
    const location = useLocation();
  
    if (location.hash === "#about") {
      document.title = "Arpan Neupane - About";
    } else if (location.pathname === "/projects") {
      document.title = "Arpan Neupane - Projects";
    } else if (location.pathname === "/contact") {
      document.title = "Arpan Neupane - Contact";
    } else {
      document.title = "Arpan Neupane";
    }
  }

function Home() {

    const [age, setAge] = useState(0)
    const [copyright, setCopyright] = useState('')

    useEffect(() => {
      const miliseconds = new Date() - new Date('11/03/2007')
      setAge(Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 365))

      const year = new Date().getFullYear()
      setCopyright(year)
    }, [])

    return (
      <div className="font-sans antialiased relative bg-white">
        
        <section id="home">
          <Flip right cascade> 
            <div className="intro-header lg:text-left text-center">
              <p className="lg:text-3xl md:text-2xl text-xl font-medium">
                Hello there!
              </p>
              <p className="lg:text-3xl md:text-2xl text-xl font-medium">
                Welcome to Project-Cluster-Prism
              </p>
            </div>
          </Flip> 
        </section>
      </div>
    )
};

export default Home;