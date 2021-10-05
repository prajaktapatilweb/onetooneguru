import React, { useEffect, useState } from "react";
import {Button} from "reactstrap";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div  className='alwaysonTop' style={{left:"20px"}} >
          {/* <img src='' alt='Go to top'/> */}
          <Button
                className="btn-lg btn-icon-only rounded-circle ml-1"
                color="instagram"
                onClick={scrollToTop}
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-up" />
                </span>
              </Button>
        </div>}
    </div>
  );
}