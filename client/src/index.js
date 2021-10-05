import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/style.css";
import "./App.css";
import Index from "./components/Index";
import Teacherform from "./components/Teacherform";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import StudentForm from "./components/StudentForm";
import Ourteam from "./components/Ourteam";
//import ScrollToTop from "./components/ScrollToTop";
import ScrollToTop from 'react-router-scroll-top'


ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop>
    <Switch>
      {/* <Route path="/" exact component= {Index} />
      <Route path="/Teachers" exact component= {Teacherform} />
      <Route path="/Students" exact component= {StudentForm }/>
      <Route path="/Contactus" exact component= {Contactus } />
      <Route path="/Aboutus" exact component= {Aboutus} /> */}
      
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route path="/Ourteam" exact render={props => <Ourteam {...props} />} />
      <Route path="/Teachers" exact render={props => <Teacherform {...props} />} />
      <Route path="/Students" exact render={props => <StudentForm {...props} />} />
      <Route path="/Contactus" exact render={props => <Contactus {...props} />} />
      <Route path="/Aboutus" exact render={props => <Aboutus {...props} />} />
      <Route path="/Ourteam" exact render={props => <Ourteam {...props} />} />
      <Redirect to="/" />
      
    </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
