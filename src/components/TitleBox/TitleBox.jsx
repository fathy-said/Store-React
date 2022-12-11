import React from 'react';
import "./TitleBox.css"
const TitleBox = ({ text }) => {
  return (
    <div className='title-box'>

      <span></span>
      <h2>{text}</h2>
    </div>
  );
}

export default TitleBox;
