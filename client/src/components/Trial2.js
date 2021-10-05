import React from "react";
import Toast from 'react-bootstrap/Toast';
//import 'bootstrap/dist/css/bootstrap.css';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Trial2() {
  //   const notify = () => toast("Wow so easy!");

  return (
    <div>
       {/* <button onClick={notify}>Notify!</button> */}
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
      {/* <ToastContainer /> */}
    </div>
  );
}
