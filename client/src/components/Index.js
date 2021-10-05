import React from "react";
//import { Container, Row } from "reactstrap";
import FPLearn from "./FPLearn";
import FPAbout from "./FPAbout";
import Footer from "./Footer";
import FPServices from "./FPServices";
import FPHero from "./FPHero";
import FPHigh1to1guru from "./FPHigh1to1guru";
import Navbar1 from "./Navbar1";
import FPTeachers from "./FPTeachers";
import FPVideo from "./FPVideo";
// import App from "../App"
// import Trial from "./Trial"
// import TeacherFormFields from "./TeacherFormFields";



class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
      
        <Navbar1 />
        <FPHero />   

        <FPLearn />
        <FPHigh1to1guru />
        <FPVideo />
        <FPServices />
        <FPTeachers /> 
        <FPAbout />
        <Footer /> 
        {/* <App /> */}
      </>
    );
  }
}

export default Index;
