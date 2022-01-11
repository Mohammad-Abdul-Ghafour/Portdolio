import { useEffect, useState } from "react";
import Image from "next/image";
import logo from './assets/portfolio.png'
const Header = () => {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        background: `rgba(6, 9, 16, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="container">
        <Image src={logo} width={40} height={40} alt="" />
        
        <a class="navbar-brand" style={{marginLeft:'10px' , color:'white'}} href="#">
          Portfolio
        </a>
        
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" style={{color:'white'}} href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:'white'}} href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:'white'}} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header