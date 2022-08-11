import React from 'react'
import { ReactDOM } from 'react-dom';
const Mailto = () => {

function Mail({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }
  
  ReactDOM.render(
    <Mail email="merlin@themerlingroupworld.com" subject="Learn More" body="Let's do an introductory call!">
      Email Now!
    </Mail>,
    document.getElementById("root")
  );
}
  export default Mailto;